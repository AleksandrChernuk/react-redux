// import { createSlice, isAnyOf } from "@reduxjs/toolkit";
// import { getNewsThunk, getSearchThunk } from "./thunk";
// import { initialState } from "./initialState";

// const handlePending = (state) => {
//   state.status = "pending";
// };

// const handleFulfilled = (state, { payload }) => {
//   state.status = "fulfilled";
//   state.news = payload.articles;
//   state.error = "";
// };

// const handleRejected = (state, { payload }) => {
//   state.status = "rejected";
//   state.error = payload;
// };

// export const newsSlice = createSlice({
//   name: "news",
//   initialState,

//   extraReducers: (builder) => {
//     builder
//       .addMatcher(isAnyOf([getNewsThunk.pending, getSearchThunk.pending]), handlePending)
//       .addMatcher(isAnyOf([getNewsThunk.fulfilled, getSearchThunk.fulfilled]), handleFulfilled)
//       .addMatcher(isAnyOf([getNewsThunk.rejected, getSearchThunk.rejected]), handleRejected);
//   },
// });

// // export const getNewsThunk = () => {
// //   return async (dispatch) => {
// // try {
// //   dispatch(newsSlice.actions.fetching);
// //   const data = await getTopNews();
// //   dispatch(newsSlice.actions.fetcSuccess(data));
// // } catch (error) {
// //   dispatch(newsSlice.actions.fetchError(error));
// // }
// //   };
// // };

// // export const newsSlice = createSlice({
// //   name: "news",
// //   initialState,
// //   // reducers: {
// //   //   fetching: (state, action) => {
// //   //     state.isLoading = true;
// //   //   },
// //   //   fetcSuccess: (state, { payload }) => {
// //   //     state.isLoading = false;
// //   //     state.news = payload.articles;
// //   //     state.error = "";
// //   //   },
// //   //   fetchError: (state, { payload }) => {
// //   //     state.isLoading = false;
// //   //     state.error = payload;
// //   //   },
// //   // },
// //   // ----------------------------
// //   // extraReducers: {
// //   //   [getNewsThunk.pending]: (state) => {
// //   //     state.status = "pending";
// //   //   },
// //   //   [getNewsThunk.fulfilled]: (state, { payload }) => {
// //   //     state.status = "fulfilled";
// //   //     state.news = payload.articles;
// //   //     state.error = "";
// //   //   },
// //   //   [getNewsThunk.rejected]: (state, { payload }) => {
// //   //     state.status = "rejected";
// //   //     state.error = payload;
// //   //   },
// //   // },
// //   // ----------------------------
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(getNewsThunk.pending, (state) => {
// //         state.status = "pending";
// //       })
// //       .addCase(getNewsThunk.fulfilled, (state, { payload }) => {
// //         state.status = "fulfilled";
// //         state.news = payload.articles;
// //         state.error = "";
// //       })
// //       .addCase(getNewsThunk.rejected, (state, { payload }) => {
// //         state.status = "rejected";
// //         state.error = payload;
// //       });
// //   },
// // });

// export const newsReducer = newsSlice.reducer;
