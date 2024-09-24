// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer'; // Import the function
import wishlistReducer from './wishlistSlice';

enableMapSet(); // Enable the MapSet plugin

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});

export default store;
