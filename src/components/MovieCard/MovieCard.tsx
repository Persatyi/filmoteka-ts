import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";

interface IProps {
  key: number;
  data: {
    id: number;
    poster_path: string;
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

const allGenres: { id: number; name: string }[] = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
  { id: 10759, name: "Action & Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 10762, name: "Kids" },
  { id: 9648, name: "Mystery" },
  { id: 10763, name: "News" },
  { id: 10764, name: "Reality" },
  { id: 10765, name: "Sci-Fi & Fantasy" },
  { id: 10766, name: "Soap" },
  { id: 10767, name: "Talk" },
  { id: 10768, name: "War & Politics" },
];

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

  const filmTitle = title || name || original_name;
  const year = new Date(first_air_date || release_date).getFullYear() || "";
  const genres =
    genre_ids
      .filter((id) => allGenres[id])
      .map((id) => allGenres[id].name)
      .join(", ") || "Genres are not specified";

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
          image={`https://image.tmdb.org/t/p/w500${poster_path}`}
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
            {genres} | {year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
