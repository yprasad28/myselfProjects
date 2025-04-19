import { configureStore } from '@reduxjs/toolkit'
import { LoginFormSlice } from './features/auth/LoginFormSlice'



export const store = configureStore({
  reducer: {
    auth:LoginFormSlice
  }
})