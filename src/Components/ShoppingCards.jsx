import { all } from "axios";
import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../slice/ShoppingSlice";

const ShoppingCards = ({ alldata }) => {

  const dispatch=useDispatch();
  const AddFunc = (e) => {
    console.log(e)
    dispatch(addtocart(e))
  };
  return (
    <>
      {alldata &&
        alldata.map((e, index) => (
          <div key={index} className="relative pt-10 mx-2 my-2 flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <Link  to={`/Product/${e.id}`}>
              <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <figure className="h-[400px] w-[400px] ">
                  <img
                    className="object-contain  w-full h-full"
                    src={e.image}
                  />
                </figure>
              </div>
            </Link>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {e.title}
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {e.description.slice(0, 100)}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
                onClick={() => AddFunc(e)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default ShoppingCards;
