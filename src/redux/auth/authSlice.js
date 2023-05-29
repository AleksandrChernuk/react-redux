import { createSlice } from "@reduxjs/toolkit";
import { regist, login, logout, currentUser } from "./authOperation";

const initialState = {
  user: { name: null, password: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [regist.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled]: (state, { payload }) => {
      state.user = { name: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [currentUser.fulfilled]: (state, { payload }) => {
      state.user = { ...payload };
      state.isLoggedIn = true;
    },
  },
});
