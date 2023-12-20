import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import referralcode from "./data";

const initialState = {
  cart: [],
  totalQ: 0,
  totalP: 0,
  referralamt: 0,
  totalAmt: 0,
  msg:"",
};

const shoppingslice = createSlice({
  name: "addtocart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const { id, title, price, image } = action.payload;
      const exist = state.cart.find((item) => item.id === id);
      if (!exist) {
        state.cart.push({ id, title, price, image, quantity: 1 });
        state.totalQ += 1;
        // state.totalP = state.cart.reduce((accumulator,current)=>accumulator + current.price,0)
        state.totalP += price; // Corrected line
      }
    },
    removefromcart: (state, action) => {
      console.log(action.payload);
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
      console.log(state.cart);
    },
    addincrement: (state, action) => {
      const { id } = action.payload;
      console.log(id);
      const itemIndex = state.cart.findIndex((item) => item.id === id);
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
        state.totalQ += 1;
        state.totalP += state.cart[itemIndex].price;
      }
      console.log("itemIndex", itemIndex);
    },
    removeincrement: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.cart.findIndex((item) => item.id === id);
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity -= 1;
        state.totalQ -= 1;
        state.totalP -= state.cart[itemIndex].price;
      }
    },
    applyreferral: (state, action) => {

      console.log("dfas")
      if (action.payload === "SEX@!123") {
        state.referralamt = (state.totalP * 20) / 100;
        state.totalAmt = state.totalP - state.referralamt;
      } else if (action.payload === "ORGY123") {
        state.referralamt = (state.totalP * 40) / 100;
        state.totalAmt = state.totalP - state.referralamt;
      } else if (action.payload === "GANGBANG12") {
        state.referralamt = (state.totalP * 50) / 100;
        state.totalAmt = state.totalP - state.referralamt;
      } else {
        state.msg = "Wrong Code"
      }
    },
  },
});

export const {
  addtocart,
  removefromcart,
  addincrement,
  removeincrement,
  applyreferral,
} = shoppingslice.actions;
export default shoppingslice.reducer;
