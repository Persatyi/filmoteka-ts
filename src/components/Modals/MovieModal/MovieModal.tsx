import React, { useState } from "react";
import { Box, Typography, Button, Menu, MenuItem } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import Tooltip from "@mui/material/Tooltip";
import {
  doc,
  arrayUnion,
  updateDoc,
  getDoc,
  arrayRemove,
} from "firebase/firestore";

import * as s from "./MovieModalTheme";
import sprite from "assets/images/Sprite/sprite.svg";
import VideoPlayer from "components/VideoPlayer";
import ButtonLoader from "components/ButtonLoader/ButtonLoader";
import MovieSnackbar from "components/MovieSnackbar/MovieSnackbar";

import { get, genresKey } from "localStorage/localStorage";
import { useGetVideoQuery } from "services/APIService";
import { useAuth } from "hooks/useAuth";
import { db } from "services/firebase";

let allGenres: { id: number; name: string }[];

(async function () {
  const { genres } = await get(genresKey);
  allGenres = genres;
})();

interface IData {
  overview?: string | undefined;
  vote_average: number;
  vote_count: number;
  popularity: number;
  original_title: string;
  poster_path: string;
  title: string;
  name: string;
  original_name: string;
  genre_ids: number[];
  id: number;
}

interface IProps {
  onClose: () => void;
  id: number;
  data: IData[];
  isQueue?: boolean | undefined;
  isWatched?: boolean | undefined;
}

const MovieModal: React.FC<IProps> = (props) => {
  const { onClose, id, data, isQueue, isWatched } = props;

  const [queueLoader, setQueueLoader] = useState<boolean>(false);
  const [watchedLoader, setWatchedLoader] = useState<boolean>(false);
  const timer = React.useRef<number>();

  const [watchedList, setWatchedList] = useState<boolean>(false);
  const [queueList, setQueueList] = useState<boolean>(false);

  const [snackType, setSnackType] = useState<
    "success" | "error" | "warning" | "info"
  >("success");
  const [snackText, setSnackText] = useState<string>("");
  const [openSnack, setOpenSnack] = useState<boolean>(false);

  const [mode, setMode] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { isAuth, id: userId } = useAuth();

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (key = "") => {
    setAnchorEl(null);
    setMode(key);
  };

  const { data: youtubeVideo } = useGetVideoQuery(id);

  const movie: IData = data.find((el) => el.id === id)!;

  const checkIsInList = async (type: string) => {
    const docRef = doc(db, "users", `${userId}`);
    getDoc(docRef).then((res) => {
      const list = res.data();
      if (list) {
        const inList = list[type].find((el: { id: number }) => el.id === id);
        if (inList && type === "queue") {
          setQueueList(true);
        }
        if (inList && type === "watched") {
          setWatchedList(true);
        }
      }
    });
  };

  if (!isQueue && isWatched) {
    checkIsInList("queue");
  }

  if (isQueue && !isWatched) {
    checkIsInList("watched");
  }

  if (!isQueue && !isWatched) {
    checkIsInList("watched");
    checkIsInList("queue");
  }

  const addToQueue = async () => {
    setQueueLoader(true);
    await updateDoc(doc(db, "users", `${userId}`), {
      queue: arrayUnion(movie),
    });
    timer.current = window.setTimeout(() => {
      setQueueLoader(false);
      setQueueList(true);
      setOpenSnack(true);
      setSnackType("success");
      setSnackText("Movie successfully added to queue.");
    }, 2000);
  };

  const addToWatched = async () => {
    setWatchedLoader(true);
    await updateDoc(doc(db, "users", `${userId}`), {
      watched: arrayUnion(movie),
    });
    timer.current = window.setTimeout(() => {
      setWatchedLoader(false);
      setWatchedList(true);
      setOpenSnack(true);
      setSnackType("success");
      setSnackText("Movie successfully added to watched.");
    }, 2000);
  };

  const removeFromQueue = async () => {
    setQueueLoader(true);
    if (isQueue) {
      timer.current = window.setTimeout(() => {
        setQueueLoader(false);
        setQueueList(false);
        setOpenSnack(true);
        setSnackType("success");
        setSnackText("Movie successfully removed from queue.");
      }, 2000);
      await updateDoc(doc(db, "users", `${userId}`), {
        queue: arrayRemove(movie),
      });
    } else {
      await updateDoc(doc(db, "users", `${userId}`), {
        watched: arrayUnion(movie),
      });
      timer.current = window.setTimeout(() => {
        setQueueLoader(false);
        setQueueList(false);
        setOpenSnack(true);
        setSnackType("success");
        setSnackText("Movie successfully removed from queue.");
      }, 2000);
    }
  };

  const removeFromWatched = async () => {
    setWatchedLoader(true);
    if (isWatched) {
      timer.current = window.setTimeout(() => {
        setWatchedLoader(false);
        setWatchedList(false);
        setOpenSnack(true);
        setSnackType("success");
        setSnackText("Movie successfully removed from watched.");
      }, 2000);
      await updateDoc(doc(db, "users", `${userId}`), {
        watched: arrayRemove(movie),
      });
    } else {
      await updateDoc(doc(db, "users", `${userId}`), {
        watched: arrayRemove(movie),
      });
      timer.current = window.setTimeout(() => {
        setWatchedLoader(false);
        setWatchedList(false);
        setOpenSnack(true);
        setSnackType("success");
        setSnackText("Movie successfully removed from watched.");
      }, 2000);
    }
  };

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
  } = movie;

  const genresNames = genre_ids
    ? genre_ids
        .filter((id: number) => allGenres[id])
        .map((id: number) => allGenres[id].name)
        .join(", ") || "Genre is not specified"
    : "Genre is not specified";

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : require("../../../assets/images/noImage.jpg");

  const filmTitle = original_title || title || name || original_name;
  let rating = "0.0";
  if (String(vote_average)?.length === 1) {
    rating = vote_average + ".0";
  } else {
    rating = vote_average === 10 ? "10.0" : String(vote_average).slice(0, 3);
  }

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
          <Box component="div" sx={s.imageWrapper}>
            <Box component="img" src={poster} alt="img" sx={s.image} />
            {youtubeVideo?.results.length !== 0 ? (
              <>
                {mode !== "" ? (
                  <Tooltip
                    title="Close player"
                    enterDelay={500}
                    leaveDelay={200}
                  >
                    <Button
                      onClick={() => handleClose()}
                      sx={{
                        position: "absolute",
                        bottom: "9px",
                        right: { xs: "40px", laptop: "80px" },
                      }}
                    >
                      <CancelPresentationIcon
                        fontSize="large"
                        sx={{
                          color: "#c00",
                        }}
                      />
                    </Button>
                  </Tooltip>
                ) : null}
                <Tooltip
                  title="Watch trailer"
                  enterDelay={500}
                  leaveDelay={200}
                >
                  <Button
                    sx={{
                      position: "absolute",
                      bottom: "10px",
                      right: { xs: "0px", laptop: "35px" },
                    }}
                    onClick={handleClick}
                  >
                    <YouTubeIcon
                      fontSize="large"
                      sx={{
                        color: "#c00",
                      }}
                    />
                  </Button>
                </Tooltip>
                <Menu
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={() => handleClose()}
                  PaperProps={{
                    style: {
                      maxHeight: 48 * 4.5,
                      maxWidth: "280px",
                      minWidth: "100px",
                    },
                  }}
                >
                  {youtubeVideo?.results?.map(({ key, name }) => (
                    <MenuItem key={key} onClick={() => handleClose(key)}>
                      {name}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : null}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography component="h3" sx={s.title}>
              {original_title}
            </Typography>
            <Box component="ul" sx={{ mb: { xs: "20px" } }}>
              <Box component="li" sx={s.item}>
                <Typography component="span" sx={s.options}>
                  Vote / Votes
                </Typography>
                <Typography component="span" sx={s.rating}>
                  {rating}
                </Typography>
                <Typography component="span" sx={s.divider}>
                  /
                </Typography>
                <Typography component="span" sx={s.voteCount}>
                  {vote_count}
                </Typography>
              </Box>
              <Box component="li" sx={s.item}>
                <Typography component="span" sx={s.options}>
                  Popularity
                </Typography>
                <Typography component="span" sx={s.popularity}>
                  {popularity}
                </Typography>
              </Box>
              <Box component="li" sx={s.item}>
                <Typography component="span" sx={s.options}>
                  Original Title
                </Typography>
                <Typography component="span" sx={s.filmTitle}>
                  {filmTitle}
                </Typography>
              </Box>
              <Box component="li" sx={{ ...s.item, mb: "0px" }}>
                <Typography component="span" sx={s.options}>
                  Genre
                </Typography>
                <Typography component="span" sx={s.genresNames}>
                  {genresNames}
                </Typography>
              </Box>
            </Box>
            <Typography component="p" sx={s.about}>
              About
            </Typography>
            <Box sx={s.overviewWrapper}>
              <Typography component="p" sx={s.overview}>
                {overview}
              </Typography>
            </Box>
            {isAuth ? (
              <Box component="div" sx={s.buttonsWrapper}>
                <ThemeProvider theme={s.button}>
                  <Button
                    variant="contained"
                    sx={{
                      position: "relative",
                      width: { xs: "130px" },
                      height: "45px",
                      color: "common.white",
                    }}
                    disabled={watchedLoader}
                    onClick={
                      isWatched || watchedList
                        ? removeFromWatched
                        : addToWatched
                    }
                  >
                    {watchedLoader ? (
                      <ButtonLoader theme="light" />
                    ) : isWatched || watchedList ? (
                      "remove from Watched"
                    ) : (
                      "add to Watched"
                    )}
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      position: "relative",
                      color: "common.black",
                      borderColor: "common.black",
                      width: { xs: "130px" },
                      height: "45px",
                    }}
                    disabled={queueLoader}
                    onClick={
                      isQueue || queueList ? removeFromQueue : addToQueue
                    }
                  >
                    {queueLoader ? (
                      <ButtonLoader />
                    ) : isQueue || queueList ? (
                      "remove from queue"
                    ) : (
                      "add to queue"
                    )}
                  </Button>
                </ThemeProvider>
              </Box>
            ) : null}
          </Box>
        </Box>
        {mode !== "" ? <VideoPlayer movieId={mode} /> : null}
      </Box>
      {openSnack && (
        <MovieSnackbar
          type={snackType}
          openSnack={openSnack}
          text={snackText}
        />
      )}
    </>
  );
};

export default MovieModal;
