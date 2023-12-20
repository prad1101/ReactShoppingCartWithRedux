import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddUserThunk, getuserThunk } from "../slice/userThunk";
import { all } from "axios";
// import { AddUserThunk } from "../slice/userThunk";

const CreateThunk = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.app.user);
    const [auto,setAuto]=useState("")
    const navigate=useNavigate();

    const alluser=useSelector((state)=>state.appt.userThunk);
  

    useEffect(()=>{
      dispatch(getuserThunk());
    },[])
    const [user, setUser] = useState({
      fname: "",
      lname: "",
      password: "",
      city: "",
      state: "",
      zip: "",
    });
  
    const getuserdata = (e) => {
      const { value, name } = e.target;
      setUser({ ...user, [name]: value });
    };


    const handlesubmit = (e) => {
      e.preventDefault();
      console.log("user", users)
      dispatch(AddUserThunk(user));
      setUser({
        fname: "",
        lname: "",
        password: "",
        city: "",
        state: "",
        zip: "",
      });
      navigate("/ListThunk")
    };
  return (
    <>
    <form className={`w-full max-w-lg `} onSubmit={handlesubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="first-name"
            name="fname"
            type="text"
            value={user.fname}
            onChange={getuserdata}
            placeholder="Jane"
          />
          <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            name="lname"
            value={user.lname}
            onChange={getuserdata}
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="password"
            name="password"
            value={user.password}
            onChange={getuserdata}
            placeholder="******************"
          />
          <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-city"
          >
            City
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            name="city"
            value={user.city}
            onChange={getuserdata}
            placeholder="Albuquerque"
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            State
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              name="state"
              value={user.state}
              onChange={getuserdata}
            >
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-zip"
          >
            Zip
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            name="zip"
            value={user.zip}
            onChange={getuserdata}
            placeholder={90210}
          />
        </div>
    
      </div>
      <button className="bg-blue-500 outline-none text-xl text-white rounded px-2 py-3  hover:bg-blue-400 ">
        submit
      </button>
    </form>

        {/* <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid"
            type="text"
            name="autocomplete"
            value={auto}
            onChange={(e)=>setAuto(e.target.value)}
            list="data"
        
          />

          <datalist id="data">
          {
            alluser.map((e)=>(
            <option value={e.fname}/>
            ))
          }
          </datalist>
      */}
         <fieldset>
  <legend>User Information</legend>
  <label htmlFor="firstName">First Name:</label>
  <input type="text" id="firstName" name="firstName" required />
  <br />
  <label htmlFor="lastName">Last Name:</label>
  <input type="text" id="lastName" name="lastName" required />
  <br />
  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" required />
</fieldset>


      </>
  );
};

export default CreateThunk;
