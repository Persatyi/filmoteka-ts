import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6b08",
      light: "#ffffff",
    },
  },
});

const title = {
  color: "common.black",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontSize: { xs: "20px", laptop: "30px" },
  lineHeight: 1.15,
  textTransform: "capitalize",
  borderRadius: "5px",
  overflow: "hidden",
  mb: { xs: "20px" },
};

const input = {
  mb: { xs: "20px" },
};

const errorMessage = {
  color: "common.black",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  lineHeight: 1.15,
  fontSize: "8px",
};

export { title, input, errorMessage };
