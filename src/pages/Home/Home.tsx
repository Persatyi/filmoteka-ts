import React, { useState } from "react";
import MovieCard from "components/MovieCard";
import MoviePagination from "components/MoviePagination";
import ModalWrapper from "components/ModalWrapper";
import MovieModal from "components/Modals/MovieModal";
import Loader from "components/Loader";

import { Box } from "@mui/material";

import { useGetPopularQuery } from "services/APIService";
import { useToggle } from "hooks";

const Home: React.FC = () => {
  const [value, toggle, setValue] = useToggle();
  const [id, setId] = useState(0);
  const [page, setPage] = useState(1);

  const handleModal = (id: number) => {
    toggle();
    setId(id);
  };

  const { data, error, isLoading, isFetching } = useGetPopularQuery(page);

  return (
    <>
      {error ? (
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

          <MoviePagination
            page={data.page}
            count={data.total_pages}
            setPage={setPage}
          />

          <ModalWrapper open={value} onClose={() => setValue(false)}>
            <MovieModal
              onClose={() => setValue(false)}
              id={id}
              data={data.results}
            />
          </ModalWrapper>
        </>
      ) : null}
    </>
  );
};

export default Home;
