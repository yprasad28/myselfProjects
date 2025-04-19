import { configureStore } from '@reduxjs/toolkit'

import  LoginFormSlice  from '../Reducers/LoginSlice'

export const store =  configureStore({
  reducer: {
    LoginFormSlice
  }
})