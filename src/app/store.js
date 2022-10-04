import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../freatures/auth/authSlice';



export default configureStore({
  reducer: {
    auth: authReducer
  }
})