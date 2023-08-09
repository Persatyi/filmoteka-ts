import { createTheme } from "@mui/material/styles";

const border = {
  position: "relative",
  display: { tablet: "flex" },
  width: { xs: "280px", tablet: "618px", laptop: "882px" },
  pt: { xs: "45px", tablet: "40px", laptop: "50px" },
  pb: { xs: "45px", tablet: "40px", laptop: "40px" },
  pl: { xs: "20px", tablet: "30px" },
  pr: { xs: "20px", tablet: "30px" },
  backgroundColor: "common.white",
};

const imageWrapper = {
  position: "relative",
  mb: { xs: "25px", tablet: "unset" },
  mr: { tablet: "30px" },
  width: { xs: "240px", tablet: "264px", laptop: "396px" },
  height: { xs: "355px", tablet: "373px", laptop: "477px" },
};

const image = {
  width: { xs: "240px", tablet: "264px", laptop: "396px" },
  height: { xs: "355px", tablet: "373px", laptop: "477px" },
  objectFit: "contain",
};

const title = {
  color: "common.black",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontSize: { xs: "20px", laptop: "40px" },
  lineHeight: 1.15,
  textTransform: "capitalize",
  borderRadius: "5px",
  overflow: "hidden",
  mb: { xs: "20px" },
};

const options = {
  color: "palette.custom.params",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: 1.33,
  display: "block",
  width: { xs: "90px", tablet: "100px", laptop: "150px" },
};

const item = {
  mb: { xs: "10px" },
  display: "flex",
  flexDirection: "row",
  minHeight: "5px",
};

const rating = {
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
};

const divider = {
  ml: { xs: "3px" },
  mr: { xs: "3px" },
  color: "custom.params",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: 1.33,
};

const voteCount = {
  color: "common.black",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: 1.33,
};

const popularity = {
  color: "common.black",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: 1.33,
};

const filmTitle = {
  color: "common.black",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: 1.33,
};

const genresNames = {
  color: "common.black",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: 1.33,
};

const about = {
  color: "common.black",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: 1.33,
  textTransform: "uppercase",
};

const overviewWrapper = {
  display: "flex",
  mt: { xs: "10px" },
  overflow: "hidden",
  overflowY: "auto",
  maxHeight: { xs: "100px", laptop: "250px" },
};

const overview = {
  color: "common.black",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: 1.66,
};

const buttonsWrapper = {
  display: "flex",
  mt: { xs: "20px", tablet: "auto" },
  gap: { xs: "15px" },
  justifyContent: { xs: "center", laptop: "start" },
};

export const button = createTheme({
  palette: {
    primary: {
      main: "#ff6b08",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "45px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 500,
          fontSize: "11px",
          lineHeight: 1.33,
          textAlign: "center",
          alignContent: "end",
        },
      },
    },
  },
});

export {
  buttonsWrapper,
  overview,
  overviewWrapper,
  about,
  genresNames,
  filmTitle,
  popularity,
  voteCount,
  divider,
  image,
  title,
  options,
  border,
  item,
  imageWrapper,
  rating,
};
