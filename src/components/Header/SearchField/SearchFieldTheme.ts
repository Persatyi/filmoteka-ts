import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "#ffffff",
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "#ffffff",
          },
          "& .MuiInput-underline:hover::before": {
            borderBottomColor: "#ffffff",
          },

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ffffff",
            },
            "&:hover": {
              borderColor: "#ffffff",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ffffff",
            },
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#ff6b08",
      light: "#ffffff",
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
