import {createSlice} from '@reduxjs/toolkit';
import {initialState} from './initialState';
import {userLogin, userSignup} from './actions';
import AuthLoading from '../../Navigators/AuthLoading';

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    //login
    [userLogin.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [userLogin.pending]: (state, action) => {
      console.log('calling');
    },
    [userLogin.rejected]: (state, action) => {
      console.log('rejected');
    },
    //sign up
    [userSignup.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [userSignup.pending]: (state, action) => {
      console.log('calling');
    },
    [userSignup.rejected]: (state, action) => {
      console.log('rejected');
    },
  },
});

export default userSlice.reducer;
