import { baseApi } from "../../api/baseApi";

const warehouseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createWarehouse: builder.mutation({
      query: (formData) => ({
        url: "/warehouses/create",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["warehouses"],
    }),

    allWarehouse: builder.query({
      query: () => {
        return {
          url: `/warehouses`,
          method: "GET",
        };
      },
      providesTags: ["warehouses"],
    }),

    getWarehouse: builder.query({
      query: (id) => `/warehouses?id=${id}`,
      providesTags: (id) => [{ type: "warehouses", id }],
    }),
  }),
});

export const { useCreateWarehouseMutation, useAllWarehouseQuery, useGetWarehouseQuery } = warehouseApi;
