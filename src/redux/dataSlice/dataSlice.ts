import { createSlice } from "@reduxjs/toolkit";

interface IInitialData {
  mode: "search" | "popular";
  page: number;
  query: string;
}

const initialState = {
  mode: "popular",
  page: 1,
  query: "",
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
  },
});

export const { setSearch, setPopular, setPage } = dataSlice.actions;

export const dataReducer = dataSlice.reducer;
