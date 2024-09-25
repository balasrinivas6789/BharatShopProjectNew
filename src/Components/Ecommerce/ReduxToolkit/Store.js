// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { enableMapSet } from "immer"; // Import the function
import wishlistReducer from "./wishlistSlice";

import cartReducer from "./cartSlice";

enableMapSet(); // Enable the MapSet plugin

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,

    cartlist: cartReducer,
  },
});

export default store;