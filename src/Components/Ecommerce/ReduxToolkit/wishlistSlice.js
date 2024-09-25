import { createSlice } from '@reduxjs/toolkit';

// Helper function to load wishlist from localStorage
const loadWishlistFromLocalStorage = () => {
  try {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? new Set(JSON.parse(storedWishlist)) : new Set();
  } catch (error) {
    console.error('Failed to load wishlist from localStorage:', error);
    return new Set();
  }
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishedItems: loadWishlistFromLocalStorage(), // Initialize from localStorage
  },
  reducers: {
    toggleWishlist: (state, action) => {
      const itemId = action.payload;
      if (state.wishedItems.has(itemId)) {
        state.wishedItems.delete(itemId);
      } else {
        state.wishedItems.add(itemId);
      }
      // Save updated wishlist to localStorage
      localStorage.setItem('wishlist', JSON.stringify(Array.from(state.wishedItems)));
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
