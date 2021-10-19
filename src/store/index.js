import { createSlice, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
const initialState = {
  items: [],
  totalQuantity: 0,
  finalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
        state.finalPrice = state.finalPrice + existingItem.price;
      } else {
        state.items.push(newItem);
        state.finalPrice = state.finalPrice + newItem.totalPrice;
      }
    },
    removeItem(state, action) {
      const id = action.payload;

      const removeItem = state.items.find((item) => item.id === id);
      state.finalPrice = state.finalPrice - removeItem.price;
      state.totalQuantity--;
      if (removeItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        removeItem.quantity--;
        removeItem.totalPrice = removeItem.totalPrice - removeItem.price;
      }
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.finalPrice = action.payload.finalPrice;
      state.items = action.payload.items;
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer
  },
});

export const cartActions = cartSlice.actions;
export default store;
