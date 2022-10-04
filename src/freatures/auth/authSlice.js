import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import loginApi from '../../api/loginApi';

const initialState = {
 
  currentUser: null,
  status: 'idle',
  error: null
}

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async (data) => {

  const response = await loginApi(data);
  return response
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLogin.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.currentUser = action.payload
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default authSlice.reducer;
