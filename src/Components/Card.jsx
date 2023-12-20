import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Card = (prop) => {
    const {carddata}=prop  
  return <>
     <div className="w-full border-2  flex flex-wrap justify-around " >
        {carddata &&
            carddata.map((e, index) => (
            <div class=" w-1/2 mx-3 mt-3  px-2 py-4  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {e.fname}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {e.city + "" + e.state}
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {e.lname}
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <button  className="bg-blue-500 ml-2 text-white font-bold rounded-sm px-2 py-2">
                Edit
              </button>
              <button onClick={ ()=>dispatch(deleteuserthunk(e.id))} className="bg-red-500 ml-2 text-white font-bold rounded-sm px-2 py-2">
                Delete
              </button>
            </div>
          ))}
      </div>
  </>;
};

export default Card;
