import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "authentication",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    signIn(state) {
      state.isLoggedIn = true;
    },
  },
});

const authActions = authSlice.actions;
export default authActions;
