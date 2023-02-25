import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPopular = createAsyncThunk(
  "data/fetchPopular",
  async (page: number, thunkAPI) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=bb3168696e35626f9e0ec9a6cc22697e&page=${page}`
      );

      return await response.json();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchGenres = createAsyncThunk(
  "data/fetchGenres",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=bb3168696e35626f9e0ec9a6cc22697e&language=en-US"
      );

      return await response.json();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
