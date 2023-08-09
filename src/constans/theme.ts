import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  // allow configuration using `createTheme`
  interface PaletteOptions {
    custom?: {
      main: string;
      text?: string;
      bg?: string;
      error?: string;
      footer?: string;
      params?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    custom: {
      main: "#ff6b08",
      bg: "#f7f7f7",
      params: "#8c8c8c",
      error: "#ff001b",
      footer: "#545454",
    },
  },
});
