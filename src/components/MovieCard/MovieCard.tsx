import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";

import { get, genresKey } from "localStorage/localStorage";

let allGenres: { id: number; name: string }[];

(async function () {
  const { genres } = await get(genresKey);
  allGenres = genres;
})();

interface IProps {
  data: {
    id: number;
    poster_path?: string;
    name: string;
    overview: string;
    vote_average: number;
    popularity: number;
    original_name: string;
    vote_count: number;
    first_air_date: string;
    release_date: string;
    title: string;
    genre_ids: number[];
  };
}

const MovieCard: React.FC<IProps> = ({ data }) => {
  const {
    id,
    poster_path,
    name,
    original_name,
    first_air_date,
    release_date,
    title,
    genre_ids,
  } = data;

  console.log(id);

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : require("../../assets/images/noImage.jpg");
  const filmTitle = title || name || original_name;
  const year = new Date(first_air_date || release_date).getFullYear() || "";
  const genresNames = genre_ids
    ? genre_ids
        .filter((id) => allGenres[id])
        .map((id) => allGenres[id].name)
        .join(", ") || "Genre is not specified"
    : "Genre is not specified";

  return (
    <Card
      sx={{
        width: { xs: "280px", tablet: "294px", desktop: "274px" },
        height: "440px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="movie"
          height="398px"
          image={poster}
          sx={{
            borderRadius: "5px",
            objectFit: "cover",
            height: "398px",
            overflow: "hidden",
            width: { xs: "280px", tablet: "294px", desktop: "274px" },
          }}
        />
        <CardContent sx={{ pt: "8px", pb: "0px", pl: "3px", pr: "3px" }}>
          <Typography
            component="span"
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: 1.16,
            }}
          >
            {filmTitle}
          </Typography>
          <Typography
            component="span"
            sx={{
              display: "flex",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: 1.33,
              color: "custom.main",
            }}
          >
            {genresNames} | {year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
