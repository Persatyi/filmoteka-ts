import MovieCard from "components/MovieCard";
import MoviePagination from "components/MoviePagination";
import { Box } from "@mui/material";

import { useGetPopularQuery } from "services/APIService";

const Home = () => {
  const { data, error, isLoading } = useGetPopularQuery(1);

  if (error) {
    return <p>Something went wrong please reload the page</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (data) {
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
          {data.results.map((element: { id: number }) => (
            <Box gridColumn="span 1" key={element.id}>
              <MovieCard data={element} />
            </Box>
          ))}
        </Box>
        <MoviePagination />
      </>
    );
  }
};

export default Home;
