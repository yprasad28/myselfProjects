import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  products: []
};
debugger
export const LoginFormSlice = createSlice({
  name: "login-form",
  initialState,
  reducers: {
    testLoginDetails: (state,action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    }
  },
});

export const { testLoginDetails } = LoginFormSlice.actions;

export default LoginFormSlice.reducer;
