import { createSlice } from "@reduxjs/toolkit";

interface IInitialData {
  results: any[];
  page: number;
  totalPages: number;
}

const initialState = {
  results: [],
  page: 1,
  totalPages: 0,
} as IInitialData;

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData(state, { payload }) {
      state.results = payload.results;
      state.page = payload.page;
      state.totalPages = payload.totalPages;
    },
  },
});

export const { addData } = dataSlice.actions;

export const dataReducer = dataSlice.reducer;
