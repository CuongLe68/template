import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    sidebar: {
      currentPage: 0,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    sidebarStart: (state) => {
      state.sidebar.isFetching = true;
    },
    sidebarSuccess: (state, action) => {
      state.sidebar.isFetching = false;
      state.sidebar.currentPage = action.payload;
    },
    sidebarFailed: (state) => {
      state.sidebar.isFetching = false;
      state.sidebar.error = true;
    },
  },
});

export const { sidebarStart, sidebarSuccess, sidebarFailed } = sidebarSlice.actions;
export default sidebarSlice.reducer;
