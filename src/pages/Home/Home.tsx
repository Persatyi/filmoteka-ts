import MovieCard from "components/MovieCard";
import MoviePagination from "components/MoviePagination";
import { Box } from "@mui/material";
import { useAppSelector } from "hooks/hooks";

const Home = () => {
  const data = useAppSelector((state) => state.data.results);
  console.log("🚀 ~ data", data);
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
          <Box gridColumn="span 1" key={element.id}>
            <MovieCard data={element} />
          </Box>
        ))}
      </Box>
      <MoviePagination />
    </>
  );
};

export default Home;
