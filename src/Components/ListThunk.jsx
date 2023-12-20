import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeuser } from "../slice/userSlice";
import { deleteuserthunk, getuserThunk } from "../slice/userThunk";
import Card from "./Card";
import { useNavigate } from "react-router-dom";



const ListThunk = () => {
  const dispatch = useDispatch();
  const { userThunk, isloading } = useSelector((state) => state.appt);
  
  useEffect(() => {
    dispatch(getuserThunk());
  }, []);

  if (isloading) {
    return <h2>Loading..</h2>;
  }

  const deleteUser = (name) => {
    dispatch(removeuser(name));
  };

  return (
    <>
     <Card carddata={userThunk}/>
    </>
  );
};

export default ListThunk;
