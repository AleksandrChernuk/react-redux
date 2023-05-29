import { createAction } from "@reduxjs/toolkit";

export const fetchTodosRequest = createAction("todos/fetchTodosRequest");

//fetchTodosSucces
export const fetchTodosSucces = createAction("todos/fetchTodosSucces");

//fetchTodosError
export const fetchTodosError = createAction("todos/fetchTodosError");

// addTodosTodosRequest;
export const addTodosRequest = createAction("todos/addTodosTodosRequest");

export const addTodosSucces = createAction("todos/addTodosSucces");

export const addTodosError = createAction("todos/addTodosError");

// deleteTodos;

export const deleteTodosRequest = createAction("todos/deleteTodosRequest");

export const deleteTodosSucces = createAction("todos/deleteTodosSucces");

export const deleteTodosError = createAction("todos/deleteTodosError");

export const toogleFilter = createAction("todos/toogleFilter");
