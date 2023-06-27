import React from "react";
import { Box, Typography, Button, Menu, MenuItem } from "@mui/material";

interface IProps {
  onClose: Function;
}

const LoginModal: React.FC<IProps> = ({ onClose }) => {
  return (
    <Box
      sx={{
        width: "280px",
        height: "200px",
        position: "absolute",
        top: "10px",
        right: "10px",
        background: "#fff",
      }}
    >
      <Typography component={"h3"} sx={{ color: "#000" }}>
        Login
      </Typography>
    </Box>
  );
};

export default LoginModal;
