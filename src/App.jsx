import React from "react";
import Page from "./Components/page";
import List from "./Components/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ListThunk from "./Components/ListThunk";
import CreateThunk from "./Components/CreateThunk";
import UserApi from "./Components/UserApi";
import ShoppingCart from "./Components/ShoppingCart";
import Product from "./Components/Product";
import Card from "./Components/Card";
import AddToCart from "./Components/AddToCart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div >
          <Routes>
            <Route exact path="/" element={<Page class="mt-12" />} />
            <Route  exact path="/List" element={<List />} />
            <Route exact path="/ListThunk" element={<ListThunk/>}/>
            <Route exact path="/CreateThunk" element={<CreateThunk/>}/>
            <Route exact path="/ListUserApi" element={<UserApi/>}/>
            <Route exact path="/ShoppingCart" element={<ShoppingCart/>}/>
            <Route exact path="/Product/:id" element={<Product/>}/>
            <Route exact path="/Cart" element={<AddToCart/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
