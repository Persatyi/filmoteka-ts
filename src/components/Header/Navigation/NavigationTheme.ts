import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Tabs, Tab, Box } from "@mui/material";

export const Wrapper = styled(AppBar)(({ theme }) => ({
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

const icon = {
  display: { xs: "flex", mobile: "none" },
  padding: "0px",
  minWidth: "0px",
  minHeight: "0px",
};

const label = {
  display: { xs: "none", mobile: "flex" },
  alignItems: "baseline",
  fontFamily: "Roboto, sans-serif",
  fontSize: 30,
  lineHeight: 1.16,
  fontWeight: 500,
  letterSpacing: ".01rem",
  color: "primary.contrastText",
  textTransform: "capitalize",
  padding: "0px",
  gap: "10px",
  minHeight: "0px",
};

const tab = {
  color: "primary.contrastText",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontSize: 12,
  lineHeight: 1.16,
  padding: "0px",
  minWidth: "35px",
  minHeight: "0px",
};

export { label, tab, icon };
