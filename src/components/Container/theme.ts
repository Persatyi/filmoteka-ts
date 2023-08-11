import { styled } from "@mui/material/styles";

// declare module "@mui/material/styles" {
//   interface BreakpointOverrides {
//     xs: true; // removes the `xs` breakpoint
//     sm: false;
//     md: false;
//     lg: false;
//     xl: false;
//     mobile: true; // adds the `mobile` breakpoint
//     tablet: true;
//     laptop: true;
//   }
// }

// export const theme = createTheme({
//   spacing: [20, 15, 30],
//   breakpoints: {
//     values: {
//       xs: 0,
//       mobile: 480,
//       tablet: 768,
//       laptop: 1024,
//     },
//   },
// });

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
    maxWidth: 648,
  },
  [theme.breakpoints.up("laptop")]: {
    maxWidth: 972,
  },
}));
