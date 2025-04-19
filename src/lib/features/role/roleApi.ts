// roleApi.ts
import { baseApi } from "../../api/baseApi";

interface EndPoint {
  _id: string;
  name: string;
  method: string;
  category: string;
  route: string;
}

export interface RoleResponse {
  _id: string;
  owner: string;
  name: string;
  description?: string;
  endPoints: string[] | EndPoint[];
  employees: string[];
  createdAt: string;
  updatedAt: string;
}

interface MetaResponse {
  totalData: number;
  totalPage: number;
  currentPage: number;
  itemsPerPage: number;
}

interface RoleListResponse {
  result: RoleResponse[];
  meta: MetaResponse;
}

interface CreateRolePayload {
  name: string;
  description?: string;
  endPoints: string[];
}

interface UpdateRolePayload {
  name?: string;
  description?: string;
  endPoints?: string[];
}

interface RoleQueryParams {
  search?: string;
  page?: number;
  limit?: number;
  sort?: string;
  fields?: string;
  role?: string;
}

const roleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRole: builder.mutation<RoleResponse, CreateRolePayload>({
      query: (roleData) => ({
        url: "/roles/create",
        method: "POST",
        body: roleData,
      }),
      invalidatesTags: ["roles"],
    }),

    getAllRoles: builder.query<
      { data: RoleResponse[]; meta: MetaResponse },
      RoleQueryParams
    >({
      query: (params) => ({
        url: "/roles",
        method: "GET",
        params: {
          search: params.search,
          sort: params.sort,
          page: params.page,
          limit: params.limit,
          fields: params.fields,
          role: params.role,
        },
      }),
      transformResponse: (response: { data: RoleListResponse }) => ({
        data: response.data.result,
        meta: response.data.meta,
      }),
      providesTags: ["roles"],
    }),

    getRoleById: builder.query<RoleResponse, string>({
      query: (id) => `/roles/${id}`,
      transformResponse: (response: { data: RoleResponse }) => response.data,
      providesTags: (_result, _error, id) => [{ type: "roles", id }],
    }),

    updateRole: builder.mutation<
      RoleResponse,
      { id: string; data: UpdateRolePayload }
    >({
      query: ({ id, data }) => ({
        url: `/roles/${id}/update`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "roles", id },
        "roles",
      ],
    }),

    deleteRole: builder.mutation<void, string>({
      query: (id) => ({
        url: `/roles/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["roles"],
    }),
  }),
});

export const {
  useCreateRoleMutation,
  useGetAllRolesQuery,
  useGetRoleByIdQuery,
  useUpdateRoleMutation,
  useDeleteRoleMutation,
} = roleApi;
