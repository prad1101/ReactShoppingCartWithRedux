import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { removeuser } from "../slice/userSlice";


const List = () => {
  const dispatch=useDispatch()
  const data = useSelector((state) => state.app.user);
  const deleteUser=(name)=>{
    
    dispatch(removeuser(name))
  }
  return (
    <>
      <div className="relative overflow-x-auto mt-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                fname
              </th>
              <th scope="col" className="px-6 py-3">
                lname
              </th>
              <th scope="col" className="px-6 py-3">
                password
              </th>
              <th scope="col" className="px-6 py-3">
                city
              </th>
              <th scope="col" className="px-6 py-3">
                state
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((e,index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {e.fname}
                  </th>
                  <td className="px-6 py-4">{e.lname}</td>
                  <td className="px-6 py-4"> {e.password}</td>
                  <td className="px-6 py-4"> {e.city}</td>
                  <td className="px-6 py-4"> {e.state}</td>
                  <td className="px-6 py-4">
                    <button  className="bg-blue-600 text-white outline-none  px-2 py-3 text-lg rounded-md font-bold"> 
                        Edit
                    </button>
                    <button onClick={()=>deleteUser(e.fname)} className="ml-4 bg-red-600 text-white outline-none  px-2 py-3 text-lg rounded-md font-bold">
                        Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;
