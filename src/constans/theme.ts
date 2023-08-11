import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
  }
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
  spacing: [20, 15, 30],
  breakpoints: {
    values: {
      xs: 0,
      mobile: 480,
      tablet: 768,
      laptop: 1024,
    },
  },
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
