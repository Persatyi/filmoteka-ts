import { styled, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export const theme = createTheme({
  spacing: [10, 15],
  breakpoints: {
    values: {
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
