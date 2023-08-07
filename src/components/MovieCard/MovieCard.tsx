import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";

import { posterPath, genresHeandler, dateConverter } from "utils";

interface IProps {
  data: {
    id: number;
    poster_path?: string | undefined;
    name?: string | undefined;
    overview?: string | undefined;
    vote_average: number;
    popularity: number;
    original_name: string;
    vote_count: number;
    first_air_date: string;
    release_date: string;
    title?: string | undefined;
    genre_ids: number[];
  };
}

const MovieCard: React.FC<IProps> = ({ data }) => {
  const {
    poster_path,
    name,
    original_name,
    first_air_date,
    release_date,
    title,
    genre_ids,
  } = data;

  const poster = posterPath(poster_path);
  const filmTitle = title || name || original_name;
  const year = dateConverter(first_air_date || release_date);
  const genresNames = genresHeandler(genre_ids);

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
