import { createSlice } from "@reduxjs/toolkit";

interface IInitialData {
  mode: "search" | "popular";
  page: number;
  query: string;
  isLoading: boolean;
}

const initialState = {
  mode: "popular",
  page: 1,
  query: "",
  isLoading: false,
} as IInitialData;

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setSearch(state, { payload }) {
      state.mode = "search";
      state.page = 1;
      state.query = payload;
    },
    setPopular(state) {
      state.mode = "popular";
      state.query = "";
      state.page = 1;
    },
    setPage(state, { payload }) {
      state.page = payload;
    },
    setLoader(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const { setSearch, setPopular, setPage, setLoader } = dataSlice.actions;

export const dataReducer = dataSlice.reducer;
