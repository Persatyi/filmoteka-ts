import React, { useState } from "react";
import MovieCard from "components/MovieCard";
import MoviePagination from "components/MoviePagination";
import ModalWrapper from "components/ModalWrapper";
import MovieModal from "components/Modals/MovieModal";

import { Box } from "@mui/material";
import { useAppSelector } from "hooks/hooks";
import { useToggle } from "hooks";

const Home: React.FC = () => {
  const [value, toggle, setValue] = useToggle();
  const [id, setId] = useState(0);

  const data = useAppSelector((state) => state.data.results);
  const page = useAppSelector((state) => state.data.page);
  const totalPages = useAppSelector((state) => state.data.totalPages);

  const handleModal = (id: number) => {
    toggle();
    setId(id);
  };

  return (
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
        {data.map((element) => (
          <Box
            gridColumn="span 1"
            key={element.id}
            onClick={() => handleModal(element.id)}
          >
            <MovieCard data={element} />
          </Box>
        ))}
      </Box>
      <MoviePagination page={page} count={totalPages} />
      <ModalWrapper open={value} onClose={() => setValue(false)}>
        <MovieModal onClose={() => setValue(false)} id={id} />
      </ModalWrapper>
    </>
  );
};

export default Home;
