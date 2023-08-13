import { styled } from "@mui/material/styles";

export const Wrapper = styled("div")(({ theme }) => ({
  mt: theme.spacing(0),
  [theme.breakpoints.up("xs")]: {
    gap: theme.spacing(1),
  },
  [theme.breakpoints.up("mobile")]: {
    gap: theme.spacing(0),
  },
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(2),
}));
