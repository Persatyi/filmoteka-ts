import { createSlice } from "@reduxjs/toolkit";
import { fetchPopular, fetchGenres } from "services/APIService";
import { save, genresKey } from "localStorage/localStorage";

interface IInitialData {
  results: any[];
  page: number;
  totalPages: number;
  isLoading: boolean;
  error: null | string;
}

const initialState = {
  isLoading: false,
  error: null,
  results: [],
  page: 1,
  totalPages: 0,
} as IInitialData;

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopular.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchPopular.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.results = payload.results;
        state.page = payload.page;
        state.totalPages = payload.total_pages;
      })
      .addCase(fetchPopular.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(fetchGenres.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchGenres.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        save(genresKey, payload);
      })
      .addCase(fetchGenres.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const dataReducer = dataSlice.reducer;
