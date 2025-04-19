import { createSlice } from "@reduxjs/toolkit";

const globalState = {
  username: "",
  password: "",
};

export const LoginFormSlice = createSlice({
  name: "login-form",
  initialState: globalState,
  reducers: {
    testLoginUserDetails: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

// Action creators are generated for each case reducer function
export const { testLoginUserDetails } = LoginFormSlice.actions;

export default LoginFormSlice.reducer;
