import {createAsyncThunk} from '@reduxjs/toolkit';

export const userLogin = createAsyncThunk('fetchUser', async user => {
  const res = await fetch('https://www.google.com').then((res) => user.uid=Math.floor(Math.random(1,1000)*100))
  //   console.log(user);
  return user;
});

export const userSignup = createAsyncThunk('fetchUser', async user => {
  const res = await fetch('https://www.google.com').then((res) => user.uid=Math.floor(Math.random(1,1000)*100))
  //   console.log(user);
  return user;
});
