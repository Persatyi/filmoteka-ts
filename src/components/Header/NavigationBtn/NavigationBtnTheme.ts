import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  "&.MuiButton-root": {
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
    minWidth: "130px",
    minHeight: "45px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: 500,
    fontSize: "12px",
    boxShadow: "0px 8px 20px rgba(255, 107, 1, 0.6)",
  },
  "&.MuiButton-contained": {
    backgroundColor: theme.palette.custom.main,
  },
}));
