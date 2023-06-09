import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const regist = createAsyncThunk("auth/regist", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);

    return data;
  } catch (error) {}
});

export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {}
});

export const currentUser = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistTokens = state.auth.token;

  if (persistTokens === null) {
    return thunkApi.rejectWithValue();
  }

  token.set(persistTokens);
  try {
    const { data } = await axios.get("/users/current");
    return data;
  } catch (error) {}
});
