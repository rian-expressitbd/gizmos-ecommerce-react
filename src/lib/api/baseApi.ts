import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryReturnValue,
} from "@reduxjs/toolkit/query";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";
import { logout, setUser } from "../features/auth/authSlice";
import { RootState } from "../store";

// Define your error response type
type ErrorResponse = {
  data?: {
    message?: string;
    errors?: Record<string, string[]>;
  };
  status?: number;
};

const API_URL: string = "http://192.168.0.250:5000/v2/api";
// const API_URL: string = "https://cal-quick-backend-node.onrender.com/v2/api";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (
  args,
  api,
  extraOptions
): Promise<
  QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>
> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    const { status, data } = result.error as ErrorResponse;

    // Helper function to show error message
    const showError = (defaultMessage: string) => {
      const message =
        data?.message ||
        (data?.errors ? Object.values(data.errors).flat().join(" ") : null) ||
        defaultMessage;
      toast.error(message);
    };

    switch (status) {
      case 401: {
        // Try to refresh token
        const refreshResult = await baseQuery(
          {
            url: `${API_URL}/auth/refresh-token`,
            method: "POST",
            body: { refreshToken: (api.getState() as RootState).auth.token },
          },
          api,
          extraOptions
        );

        if (refreshResult.data) {
          const response = refreshResult.data as {
            token: string;
            refreshToken?: string;
          };
          api.dispatch(
            setUser({
              token: response.token,
              refreshToken: response.refreshToken,
            })
          );

          // Retry original request with new token
          result = await baseQuery(args, api, extraOptions);
          console.log("Initial query result:", result); // Log the initial response
        } else {
          showError("Your session has expired. Please log in again.");
          api.dispatch(logout());
        }
        break;
      }

      case 403:
        showError("You don't have permission to perform this action.");
        break;

      case 404:
        showError("The requested resource was not found.");
        break;

      case 500:
        showError("Server error. Please try again later.");
        break;

      case 400:
        // Handle validation errors
        showError("Invalid request. Please check your input.");
        break;

      default:
        showError("An unexpected error occurred.");
        break;
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: [
    "businesses",
    "warehouses",
    "brands",
    "categories",
    "subcategories",
    "products",
    "endpoints",
    "roles",
    "employees",
  ],
  endpoints: () => ({}),
});
