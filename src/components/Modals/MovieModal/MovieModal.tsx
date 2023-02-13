import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import * as s from "./MovieModalTheme";
import sprite from "assets/images/Sprite/sprite.svg";

const MovieModal: React.FC = () => {
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
      >
        <svg width="15px" height="15px" style={{}}>
          <use href={`${sprite}#icon-cross`}></use>
        </svg>
      </Button>

      <Box
        component="img"
        src={require("../../../assets/images/Rectangle.jpg")}
        alt="img"
        sx={s.image}
      />
      <Box>
        <Typography component="h3" sx={s.title}>
          A FISTFUL OF LEAD
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
              7.3
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
              1260
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
              100.2
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
              A FISTFUL OF LEAD
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
              Western
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
          Four of the West’s most infamous outlaws assemble to steal a huge
          stash of gold from the most corrupt settlement of the gold rush towns.
          But not all goes to plan one is killed and the other three escapes
          with bags of gold hide out in the abandoned gold mine where they
          happen across another gang of three – who themselves were planning to
          hit the very same bank! As tensions rise, things go from bad to worse
          as they realise the bags of gold are filled with lead... they’ve been
          double crossed – but by who and how?
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
