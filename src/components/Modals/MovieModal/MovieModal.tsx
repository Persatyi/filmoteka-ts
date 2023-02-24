import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import * as s from "./MovieModalTheme";
import sprite from "assets/images/Sprite/sprite.svg";

import { useAppSelector } from "hooks/hooks";
import { get, genresKey } from "localStorage/localStorage";

let allGenres: { id: number; name: string }[];

(async function () {
  const { genres } = await get(genresKey);
  allGenres = genres;
})();

interface IProps {
  onClose: () => void;
  id: number;
}

const MovieModal: React.FC<IProps> = (props) => {
  const { onClose, id } = props;

  const data = useAppSelector((state) => state.data.results);

  const {
    overview,
    vote_average,
    vote_count,
    popularity,
    original_title,
    poster_path,
    title,
    name,
    original_name,
    genre_ids,
  } = data.find((el) => el.id === id);

  const genresNames =
    genre_ids
      .filter((id: number) => allGenres[id])
      .map((id: number) => allGenres[id].name)
      .join(", ") || "Genre is not specified";

  const filmTitle = original_title || title || name || original_name;
  let rating = "0.0";
  if (String(vote_average)?.length === 1) {
    rating = vote_average + ".0";
  } else {
    rating = vote_average === 10 ? "10.0" : String(vote_average).slice(0, 3);
  }

  return (
    <Box component="div" sx={s.border}>
      <Button
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          minWidth: "15px",
          minHeight: "15px",
          padding: "0px",
        }}
        onClick={onClose}
      >
        <svg width="15px" height="15px">
          <use href={`${sprite}#icon-cross`}></use>
        </svg>
      </Button>

      <Box
        component="img"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="img"
        sx={s.image}
      />
      <Box>
        <Typography component="h3" sx={s.title}>
          {original_title}
        </Typography>
        <Box component="ul" sx={{ mb: { xs: "20px" } }}>
          <Box component="li" sx={s.item}>
            <Typography component="span" sx={s.options}>
              Vote / Votes
            </Typography>
            <Typography
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "16px",
                backgroundColor: "custom.main",
                borderRadius: "5px",
                color: "common.white",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: 1.16,
                textAlign: "center",
              }}
            >
              {rating}
            </Typography>
            <Typography
              component="span"
              sx={{
                ml: { xs: "3px" },
                mr: { xs: "3px" },
                color: "custom.params",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: 1.33,
              }}
            >
              /
            </Typography>
            <Typography
              component="span"
              sx={{
                color: "common.black",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: 1.33,
              }}
            >
              {vote_count}
            </Typography>
          </Box>
          <Box component="li" sx={s.item}>
            <Typography component="span" sx={s.options}>
              Popularity
            </Typography>
            <Typography
              component="span"
              sx={{
                color: "common.black",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: 1.33,
              }}
            >
              {popularity}
            </Typography>
          </Box>
          <Box component="li" sx={s.item}>
            <Typography component="span" sx={s.options}>
              Original Title
            </Typography>
            <Typography
              component="span"
              sx={{
                color: "common.black",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: 1.33,
              }}
            >
              {filmTitle}
            </Typography>
          </Box>
          <Box component="li" sx={{ ...s.item, mb: "0px" }}>
            <Typography component="span" sx={s.options}>
              Genre
            </Typography>
            <Typography
              component="span"
              sx={{
                color: "common.black",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: 1.33,
              }}
            >
              {genresNames}
            </Typography>
          </Box>
        </Box>
        <Typography
          component="p"
          sx={{
            color: "common.black",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: 1.33,
            textTransform: "uppercase",
          }}
        >
          About
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "common.black",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: 1.66,
            mt: { xs: "10px" },
          }}
        >
          {overview}
        </Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            mt: { xs: "20px" },
            gap: { xs: "15px" },
            justifyContent: { xs: "center", laptop: "start" },
          }}
        >
          <ThemeProvider theme={s.button}>
            <Button
              variant="contained"
              sx={{
                minWidth: { xs: "110px" },
                height: "45px",
                color: "common.white",
              }}
            >
              add to Watched
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "common.black",
                borderColor: "common.black",
                minWidth: { xs: "110px" },
                height: "45px",
              }}
            >
              add to queue
            </Button>
          </ThemeProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieModal;
