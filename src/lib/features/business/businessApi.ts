// businessApi.ts
import { Business, MetaResponse } from "@/types/business";
import { baseApi } from "../../api/baseApi";

const businessApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBusiness: builder.mutation({
      query: (formData) => ({
        url: "/businesses/create",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["businesses"],
    }),

    allBusiness: builder.query({
      query: (params: { search?: string; page: number; limit: number }) => ({
        url: "/businesses",
        method: "GET",
        params: {
          search: params.search,
          page: params.page,
          limit: params.limit,
        },
      }),
      transformResponse: (response: { data: Business[]; meta: MetaResponse }) => ({
        data: response.data,
        meta: response.meta,
      }),
      providesTags: ["businesses"],
    }),

    getBusiness: builder.query({
      query: (id) => `/businesses?_id=${id}`,
      providesTags: (id) => [{ type: "businesses", id }],
    }),

    updateBusiness: builder.mutation({
      query: ({ id, data }) => ({
        url: `/businesses/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ({ id }) => [{ type: "businesses", id }],
    }),
  }),
});

export const { useCreateBusinessMutation, useAllBusinessQuery, useGetBusinessQuery, useUpdateBusinessMutation } =
  businessApi;
