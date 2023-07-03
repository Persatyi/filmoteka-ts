import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Typography } from "@mui/material";
import { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "services/firebase";

import * as s from "./UserDisplayTheme";

const UserDisplay = () => {
  const [user, setUser] = useState<User | null>(null);
  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return (
    <Box component="div" sx={{ display: "flex" }}>
      <AccountCircleIcon sx={{ width: "30px", height: "30px" }} />
      <Typography component="p" sx={s.user}>
        {user?.displayName}
      </Typography>
    </Box>
  );
};

export default UserDisplay;
