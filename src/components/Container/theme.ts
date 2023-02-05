import { styled, createTheme } from "@mui/material/styles";

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
    desktop: true;
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    custom: {
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
  spacing: [10, 15],
  breakpoints: {
    values: {
      xs: 0,
      mobile: 480,
      tablet: 768,
      laptop: 1024,
      desktop: 1280,
    },
  },
});

export const Root = styled("div")(({ theme }) => ({
  paddingLeft: theme.spacing(0),
  paddingRight: theme.spacing(0),
  maxWidth: 320,
  margin: "0 auto",
  [theme.breakpoints.up("mobile")]: {
    maxWidth: 480,
  },
  [theme.breakpoints.up("tablet")]: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    maxWidth: 768,
  },
  [theme.breakpoints.up("laptop")]: {
    maxWidth: 1024,
  },
  [theme.breakpoints.up("desktop")]: {
    maxWidth: 1280,
  },
}));
