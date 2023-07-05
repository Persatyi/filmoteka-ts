import React from "react";
import { redirect } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Menu, MenuItem, Button, Box } from "@mui/material";
import { signOut } from "firebase/auth";

import { auth } from "services/firebase";
import { removeUser } from "redux/userSlice";
import { useAppDispatch } from "hooks/hooks";

import { useAuth } from "hooks/useAuth";

// import * as s from "./UserDisplayTheme";

const UserDisplay = () => {
  const { name } = useAuth();

  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = async () => {
    signOut(auth)
      .then(() => {
        setAnchorEl(null);

        // Цей діспатч не потрібен оскільки firebase надає свій функціонал який відслідковує чи
        // юзер розлогінився, коли це відбувається спрацьовує інструкція яка описана App.tsx
        // в onAuthStateChanged

        // dispatch(removeUser());
        redirect("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box component="div">
      <Button
        sx={{
          color: "primary.contrastText",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          lineHeight: 1.16,
        }}
        style={{ backgroundColor: "transparent" }}
        variant="text"
        disableElevation
        disableRipple
        disableFocusRipple
        onClick={handleClick}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        endIcon={<AccountCircleIcon sx={{ width: "28px", height: "28px" }} />}
      >
        {name}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default UserDisplay;
