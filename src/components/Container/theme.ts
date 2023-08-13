import { styled } from "@mui/material/styles";

export const Root = styled("div")(({ theme }) => ({
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  maxWidth: 320,
  margin: "0 auto",
  [theme.breakpoints.up("mobile")]: {
    maxWidth: 480,
  },
  [theme.breakpoints.up("tablet")]: {
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    maxWidth: 648,
  },
  [theme.breakpoints.up("laptop")]: {
    maxWidth: 972,
  },
}));
