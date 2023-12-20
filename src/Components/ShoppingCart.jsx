import React from "react";
import { useGetAllDataCartQuery } from "../slice/userShopping";
import { Link } from "react-router-dom";
import ShoppingCards from "./ShoppingCards";
const ShoppingCart = () => {
  const { data, isLoading, isPending } = useGetAllDataCartQuery();
  return (
    <>
      <div className=" w-[90%] mt-10 mx-auto md:flex  md:flex-row md:flex-wrap ">
      {
        isLoading ? <p className="text-2xl font-bold text-center mt-10">Loading...</p> :
       <ShoppingCards alldata={data}/>
      }
      </div>
    </>
  );
};

export default ShoppingCart;
