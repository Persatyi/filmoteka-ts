import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "white",
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "#ffffff",
          },
          "& .MuiInput-underline:hover::before": {
            borderBottomColor: "#ffffff",
          },

          // "& .MuiOutlinedInput-root": {
          //   "& fieldset": {
          //     borderColor: "white",
          //   },
          //   "&:hover": {
          //     borderColor: "white",
          //   },
          //   "&.Mui-focused fieldset": {
          //     borderColor: "yellow",
          //   },
          // },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#ff6b08",
    },
  },
});

export const box = {
  width: {
    xs: "unset",
    mobile: "330px",
  },
  ml: {
    mobile: "auto",
  },
  mr: {
    mobile: "auto",
  },
  mt: {
    xs: "35px",
    mobile: "15px",
  },
};
