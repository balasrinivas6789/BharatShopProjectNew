
import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  cartItems : new Set()
};

const cartlistSlice = createSlice({
  name : 'cartList',
  initialState,
  reducers :{
    toggleCartlist : (state,action) => {
      const itemId = action.payload;
      if(state.cartItems.has(itemId)){
        state.cartItems.delete(itemId);
      }else{
        state.cartItems.add(itemId)
      }
    } 
  }
});

export const {toggleCartlist} = cartlistSlice.actions
export default cartlistSlice.reducer