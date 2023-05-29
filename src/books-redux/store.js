import { configureStore } from "@reduxjs/toolkit";
import { booksSlice } from "./books/booksReducer";

export const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
});
