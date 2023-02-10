import MovieCard from "components/MovieCard";
import MoviePagination from "components/MoviePagination";
import { Box } from "@mui/material";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const Home = () => {
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
        {arr.map((el, index) => (
          <Box gridColumn="span 1">
            <MovieCard key={index} />
          </Box>
        ))}
      </Box>
      <MoviePagination />
    </>
  );
};

export default Home;
