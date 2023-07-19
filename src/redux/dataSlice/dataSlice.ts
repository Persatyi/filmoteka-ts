import { createSlice } from "@reduxjs/toolkit";

export enum Mode {
  SEARCH,
  POPULAR,
}

interface IInitialData {
  mode: Mode;
  page: number;
  query: string;
  isLoading: boolean;
}

const initialState = {
  mode: Mode.POPULAR,
  page: 1,
  query: "",
  isLoading: false,
} as IInitialData;

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setSearch(state, { payload }) {
      state.mode = Mode.SEARCH;
      state.page = 1;
      state.query = payload;
    },
    setPopular(state) {
      state.mode = Mode.POPULAR;
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
