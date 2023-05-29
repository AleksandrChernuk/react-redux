import { fetchBooksById, fetchBooksList } from "../../services/getBooks";
// import { fetchBooksRequest, fetchBooksSuccess, fetchBooksError } from "./booksActions";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchBooks = () => async (dispatch) => {
//   dispatch(fetchBooksRequest());

//   try {
//     const data = await fetchBooksList();
//     dispatch(fetchBooksSuccess(data));
//   } catch (error) {
//     dispatch(fetchBooksError(error));
//   }
// };

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const data = await fetchBooksList();
  return data;
});

export const fetchBooksId = createAsyncThunk("books/fetchBooksId", async (id) => {
  const data = await fetchBooksById(id);
  return data;
});
