import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  cartCount: 0,
};
const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    incrementCartCount(state, action) {
      console.log(state.cartCount,"state cartCount")
      state.cartCount += action.payload;
    },
    decrementCartCount(state, action) {
      state.cartCount = Math.max(state.cartCount - action.payload, 0);
    },
    setCartCount(state, action) {
      state.cartCount = action.payload;
    },
  },
});
export const { incrementCartCount, decrementCartCount, setCartCount } =
  userSlice.actions;
export default userSlice.reducer;
