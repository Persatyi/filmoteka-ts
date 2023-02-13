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

const image = {
  width: { xs: "240px", tablet: "264px", laptop: "396px" },
  height: { xs: "355px", tablet: "373px", laptop: "477px" },
  mb: { xs: "25px", tablet: "unset" },
  mr: { tablet: "30px" },
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
  color: "custom.params",
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
          fontSize: "12px",
          lineHeight: 1.33,
          textAlign: "center",
        },
      },
    },
  },
});

export { image, title, options, border, item };
