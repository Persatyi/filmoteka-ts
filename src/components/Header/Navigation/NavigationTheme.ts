import { styled } from "@mui/material/styles";
import { AppBar, Toolbar } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "unset",
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: "0px",
  display: "flex",
  alignItems: "baseline",
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
