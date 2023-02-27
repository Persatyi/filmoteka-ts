/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import MovieCard from "components/MovieCard";
import MoviePagination from "components/MoviePagination";
import ModalWrapper from "components/ModalWrapper";
import MovieModal from "components/Modals/MovieModal";
import Loader from "components/Loader";

import { Box } from "@mui/material";

import { useGetPopularQuery, useSearchMovieQuery } from "services/APIService";
import { useToggle } from "hooks";
import { useAppSelector } from "hooks/hooks";

const Home: React.FC = () => {
  const mode = useAppSelector((state) => state.dataReducer.mode);
  const page = useAppSelector((state) => state.dataReducer.page);
  const query = useAppSelector((state) => state.dataReducer.query);

  const [value, toggle, setValue] = useToggle();
  const [id, setId] = useState(0);

  const handleModal = (id: number) => {
    toggle();
    setId(id);
  };

  const { data, error, isLoading, isFetching } = useGetPopularQuery(page, {
    skip: mode === "search",
  });
  const {
    data: searchData,
    error: searchErorr,
    isLoading: searchLoading,
    isFetching: isSearchFetching,
  } = useSearchMovieQuery({ page, query }, { skip: mode === "popular" });

  return (
    <>
      {mode === "popular" &&
        (error ? (
          <p>Something went wrong please reload the page</p>
        ) : isLoading ? (
          <Loader />
        ) : isFetching ? (
          <Loader />
        ) : data ? (
          <>
            <Box
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                tablet: "repeat(2, 1fr)",
                laptop: "repeat(3, 1fr)",
              }}
              gap={{ xs: 0, tablet: 2 }}
              sx={{ justifyItems: { mobile: "center" } }}
            >
              {data.results.map((element: { id: number }) => (
                <Box
                  gridColumn="span 1"
                  key={element.id}
                  onClick={() => handleModal(element.id)}
                >
                  <MovieCard data={element} />
                </Box>
              ))}
            </Box>

            <MoviePagination page={data.page} count={data.total_pages} />

            <ModalWrapper open={value} onClose={() => setValue(false)}>
              <MovieModal
                onClose={() => setValue(false)}
                id={id}
                data={data.results}
              />
            </ModalWrapper>
          </>
        ) : null)}
      {mode === "search" &&
        (searchErorr ? (
          <p>Something went wrong please reload the page</p>
        ) : searchLoading ? (
          <Loader />
        ) : isSearchFetching ? (
          <Loader />
        ) : searchData ? (
          <>
            <Box
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                tablet: "repeat(2, 1fr)",
                laptop: "repeat(3, 1fr)",
              }}
              gap={{ xs: 0, tablet: 2 }}
              sx={{ justifyItems: { mobile: "center" } }}
            >
              {searchData.results.map((element: { id: number }) => (
                <Box
                  gridColumn="span 1"
                  key={element.id}
                  onClick={() => handleModal(element.id)}
                >
                  <MovieCard data={element} />
                </Box>
              ))}
            </Box>

            <MoviePagination
              page={searchData.page}
              count={searchData.total_pages}
            />

            <ModalWrapper open={value} onClose={() => setValue(false)}>
              <MovieModal
                onClose={() => setValue(false)}
                id={id}
                data={searchData.results}
              />
            </ModalWrapper>
          </>
        ) : null)}
    </>
  );
};

export default Home;
