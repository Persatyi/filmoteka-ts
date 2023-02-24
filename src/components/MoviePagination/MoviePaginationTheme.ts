import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .Mui-selected": {
            color: "#fff",
          },
          "& .MuiPaginationItem-root": {
            fontFamily: "Roboto, sans-serif",
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: 1.33,
            color: "palette.common.black",
          },
        },
        ul: {
          justifyContent: "center",
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
