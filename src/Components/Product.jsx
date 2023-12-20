import React, { useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useGetCartDataByIdQuery } from "../slice/userShopping";
import { isPending } from "@reduxjs/toolkit";

function Product() {
  const location = useLocation();
  const productid = location.pathname.slice(9);
  const { data, isLoading, isPending } = useGetCartDataByIdQuery(productid);
  console.log(data);
  if (isLoading || isPending) {
    return <p>Loading..</p>;
  }

  return (
    <>
      <div className="w-[70%] h-screen flex mx-auto ">
        <div className="w-full gap-x-5 flex items-center">
          <div>
            <figure className="h-[400px] w-[400px] ">
              <img className="object-fit w-full h-full " src={data.image} />
            </figure>
          </div>
          <div>
            <p className="font-bold text-3xl ">{data.title}</p>
            <p className="font-normal text-xl mt-5">{data.description}</p>
            <p className="mt-5 font-semibold">Price : ${data.price}</p>
            <p className="mt-5 font-semibold">rating : {data.rating.count}</p>
            <p className="mt-5 font-semibold">rating : {data.rating.rate}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
