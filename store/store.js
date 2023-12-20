import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userSlice from "../src/slice/userSlice";
import userThunk from "../src/slice/userThunk";
import { userApi } from "../src/slice/UserCreateApi";
import { userShoppingCart } from "../src/slice/userShopping";
import ShoppingSlice from "../src/slice/ShoppingSlice";

const store = configureStore({
  reducer: {
    //simple slice
    app: userSlice,
    // state management with createasyncthunk
    appt: userThunk,
    shopping: ShoppingSlice,
    //state mangement with createapi
    [userShoppingCart.reducerPath]: userShoppingCart.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      userShoppingCart.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
