import axios from "axios";
import {
  fetchTodosRequest,
  fetchTodosSucces,
  fetchTodosError,
  addTodosRequest,
  addTodosSucces,
  addTodosError,
  deleteTodosRequest,
  deleteTodosSucces,
  deleteTodosError,
} from "./todos-actions";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchTodos = () => async (dispatch) => {
  dispatch(fetchTodosRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchTodosSucces(data));
  } catch (error) {
    dispatch(fetchTodosError(error.message));
  }
};

export const addTodos = (post) => async (dispatch) => {
  const newPost = {
    name: post.name,
    number: post.number,
  };
  dispatch(addTodosRequest());

  try {
    const { data } = await axios.post("/contacts", newPost);
    dispatch(addTodosSucces(data));
  } catch (error) {
    dispatch(addTodosError(error.message));
  }
};

export const deleteTodos = createAsyncThunk("deleteTodos", async (elId) => {
  try {
    const { data } = await axios.delete(`/contacts/${elId}`);
    return data;
  } catch (error) {}
});
