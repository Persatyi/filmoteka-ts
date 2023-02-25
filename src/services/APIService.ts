import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const KEY = "bb3168696e35626f9e0ec9a6cc22697e";

interface IMovies {
  map(
    arg0: (element: { id: number }) => JSX.Element
  ): import("react").ReactNode;
  results: any[];
  page: number;
  total_pages: number;
}

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getPopular: builder.query<IMovies, number>({
      query: (page) => `trending/all/day?api_key=${KEY}&page${page}`,
    }),
  }),
});

export const { useGetPopularQuery } = moviesApi;

export function fetchGenres() {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=bb3168696e35626f9e0ec9a6cc22697e"
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return response.json();
  });
}
