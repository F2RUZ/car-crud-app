import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/", // vaqtincha Fake API
  }),
  tagTypes: ["Cars"],

  endpoints: (builder) => ({
    // 1) GET all cars
    getCars: builder.query({
      query: () => "products",
      providesTags: ["Cars"],
    }),

    // 2) GET single car
    getCar: builder.query({
      query: (id) => `products/${id}`,
      providesTags: ["Cars"],
    }),

    // 3) CREATE car
    addCar: builder.mutation({
      query: (newCar) => ({
        url: "products",
        method: "POST",
        body: newCar,
      }),
      invalidatesTags: ["Cars"],
    }),

    // 4) UPDATE car
    updateCar: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Cars"],
    }),

    // 5) DELETE car
    deleteCar: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cars"],
    }),
  }),
});

export const {
  useGetCarsQuery,
  useGetCarQuery,
  useAddCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
} = carsApi;
