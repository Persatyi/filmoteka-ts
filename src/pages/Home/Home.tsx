// import s from "./Home.module.scss"
import MovieCard from "components/MovieCard";
import { Grid } from "@mui/material";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const Home = () => {
  return (
    <>
      <Grid
        container
        rowSpacing={{ xs: 0, mobile: 0, tablet: 2, laptop: 2 }}
        columnSpacing={{ xs: 0, mobile: 0, tablet: 2, laptop: 2 }}
      >
        {arr.map((el, index) => (
          <Grid item xs={12} mobile={12} tablet={6} laptop={4}>
            <MovieCard key={index} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
