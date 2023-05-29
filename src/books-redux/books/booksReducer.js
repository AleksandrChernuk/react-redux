import { createSlice } from "@reduxjs/toolkit";
// import * as booksActions from "./booksActions";
import { fetchBooks, fetchBooksId } from "./booksOpeeration";

const initialState = {
  entities: [],
  isLoading: false,
  error: null,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  // reducers: {
  //   // standard reducer logic, with auto-generated action types per reducer
  // },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchBooks.pending, (state, { payload }) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(fetchBooks.fulfilled, (state, { payload }) => {
        return {
          ...state,
          entities: payload,
          isLoading: false,
          error: null,
        };
      })
      .addCase(fetchBooks.rejected, (state, { payload }) => {
        return { ...state, error: payload, isLoading: false };
      })
      .addCase(fetchBooksId.pending, (state, { payload }) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(fetchBooksId.fulfilled, (state, { payload }) => {
        return {
          ...state,
          entities: [payload],
          isLoading: false,
          error: null,
        };
      })
      .addCase(fetchBooksId.rejected, (state, { payload }) => {
        return { ...state, error: payload, isLoading: false };
      });
  },
});

// const entities = createReducer([], { [fetchBooks.fulfilled]: (state, { payload }) => (state = payload) });

// const isLoading = createReducer(false, {
//   [fetchBooks.pending]: () => true,
//   [fetchBooks.fulfilled]: () => false,
//   [fetchBooks.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchBooks.rejected]: (_, { payload }) => payload,
//   [fetchBooks.fulfilled]: () => null,
// });

// export const booksReducer = combineReducers({ });
