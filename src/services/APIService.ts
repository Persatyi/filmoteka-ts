import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const KEY = "bb3168696e35626f9e0ec9a6cc22697e";

interface IMovies {
  results: any[];
  page: number;
  total_pages: number;
}

interface IGenres {
  id: number;
  name: string;
}

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  tagTypes: ["Popular"],
  endpoints: (builder) => ({
    getPopular: builder.query<IMovies, number | void>({
      query: (page = 1) => `trending/all/day?api_key=${KEY}&page=${page}`,
      providesTags: ["Popular"],
    }),
    searchMovie: builder.query<IMovies, { page: number | void; query: string }>(
      {
        query: ({ page = 1, query }) =>
          `search/movie?api_key=${KEY}&language=en-US&page=${page}&include_adult=true&query=${query}`,
      }
    ),
    getGenres: builder.query<IGenres[], void>({
      query: () => `genre/movie/list?api_key=${KEY}`,
    }),
  }),
});

export const { useGetPopularQuery, useGetGenresQuery, useSearchMovieQuery } =
  moviesApi;
