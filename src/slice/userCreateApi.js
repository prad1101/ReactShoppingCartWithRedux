import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "GetallPostuser",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
    getDatabyid: builder.query({
      query: (id) => {
        return {
          url: `posts/${id}`,
          method: "GET",
          headers:{
          

          }
        }
      },
    }),
    getDeletedata: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetDatabyidQuery,
  useGetDeletedataMutation,
} = userApi;
