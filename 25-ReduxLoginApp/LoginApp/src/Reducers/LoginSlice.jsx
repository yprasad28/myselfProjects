import { createSlice } from "@reduxjs/toolkit";

const globalState = {
  username: "",
  password: "",
  name: "",
  signupDetails: {
    firstName: "",
    lastName: "",
    email: ""
  }
};
debugger
export const LoginFormSlice = createSlice({
  name: "login-form",
  initialState: globalState,

  reducers: {
    testLoginUserDetails: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.name = action.payload.name;
    },
    testRegisterDetails: (state, action) => {
      state.signupDetails.firstName = action.payload.firstName;
      state.signupDetails.lastName = action.payload.lastName;
      state.signupDetails.email = action.payload.email;
    }
  },
});

// Action creators are generated for each case reducer function
export const { testLoginUserDetails, testRegisterDetails } = LoginFormSlice.actions;

export default LoginFormSlice.reducer;
