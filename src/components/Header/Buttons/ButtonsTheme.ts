import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6b08",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          borderColor: "#ffffff",
          minWidth: "130px",
          minHeight: "45px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 500,
          fontSize: "12px",
          boxShadow: "0px 8px 20px rgba(255, 107, 1, 0.6)",
        },
      },
    },
  },
});

export const box = {
  mt: "15px",
  gap: { xs: "20px", mobile: "15px" },
  display: "flex",
  justifyContent: "center",
  padding: "30px",
};
