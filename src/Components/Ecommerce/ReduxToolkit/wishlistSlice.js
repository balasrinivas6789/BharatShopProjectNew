import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishedItems: new Set(),
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const itemId = action.payload;
      if (state.wishedItems.has(itemId)) {
        state.wishedItems.delete(itemId);
      } else {
        state.wishedItems.add(itemId);
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;