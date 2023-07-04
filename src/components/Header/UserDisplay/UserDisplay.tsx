import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Menu, MenuItem, Button, Box } from "@mui/material";
import { signOut } from "firebase/auth";

import { auth } from "services/firebase";
import { removeUser } from "redux/userSlice";

import { useAuth } from "hooks/useAuth";

// import * as s from "./UserDisplayTheme";

const UserDisplay = () => {
  const { name } = useAuth();

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
        removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box component="div">
      <Button
        sx={{ display: "flex", alignItems: "center" }}
        onClick={handleClick}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {name}
        <AccountCircleIcon sx={{ width: "30px", height: "30px" }} />
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
