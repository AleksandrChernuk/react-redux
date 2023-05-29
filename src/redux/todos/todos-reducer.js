import { createReducer } from "@reduxjs/toolkit";
import {
  fetchTodosRequest,
  fetchTodosSucces,
  fetchTodosError,
  addTodosRequest,
  addTodosSucces,
  addTodosError,
  toogleFilter,
} from "./todos-actions";
import { deleteTodos } from "./todos-operation";

const initialState = {
  items: [],
  filter: "",
  isLoading: false,
  error: null,
};

export const todosReducer = createReducer(initialState, {
  [toogleFilter]: (state, { payload }) => {
    state.filter = payload;
  },

  [fetchTodosRequest]: (state, { payload }) => {
    state.isLoading = true;
  },
  [fetchTodosSucces]: (state, { payload }) => {
    state.items = payload;
    state.isLoading = false;
  },
  [fetchTodosError]: (state, { payload }) => {},
  [addTodosRequest]: (state, { payload }) => {
    state.isLoading = true;
  },
  [addTodosSucces]: (state, { payload }) => {
    state.items.push(payload);
    state.isLoading = false;
  },
  [addTodosError]: (state, { payload }) => { },
  
  
  [deleteTodos.fulfilled]: (state, { payload }) => {
    const index = state.items.findIndex((e) => e.id === payload.id);
    state.items.splice(index, 1);
  },
});
