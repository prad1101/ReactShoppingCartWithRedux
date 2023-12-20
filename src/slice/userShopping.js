import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userShoppingCart = createApi({
  reducerPath: "ShoppingCart",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getAllDataCart: builder.query({
      query: () => {
        return {
          url: "products",
          method: "GET",
        };
      },
    }),
    getCartDataById:builder.query({
        query:(id)=>{
          return{
            url:`products/${id}`,
            method:'GET'
          };
        },
    }),
  }),
});

export const { useGetAllDataCartQuery , useGetCartDataByIdQuery } = userShoppingCart;
