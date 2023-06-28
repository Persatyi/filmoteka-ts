import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import LoginIcon from "@mui/icons-material/Login";

import * as s from "./LoginModalTheme";
import sprite from "assets/images/Sprite/sprite.svg";

interface IProps {
  onClose: Function;
}

const LoginModal: React.FC<IProps> = ({ onClose }) => {
  return (
    <Box
      sx={{
        width: "280px",
        position: "absolute",
        // top: "10px",
        // right: "10px",
        background: "#fff",
        padding: "30px",
      }}
      component="form"
    >
      <Button
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          minWidth: "15px",
          minHeight: "15px",
          padding: "0px",
        }}
        onClick={() => onClose(false)}
        type="button"
      >
        <svg width="15px" height="15px">
          <use href={`${sprite}#icon-cross`}></use>
        </svg>
      </Button>
      <Typography align="center" component={"h3"} sx={s.title}>
        Login
      </Typography>
      <ThemeProvider theme={s.theme}>
        <TextField
          sx={s.input}
          id="standard-basic1"
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          color="primary"
          required
          // value={value}
          // onChange={(event) => setValue(event.target.value)}
        />
        <TextField
          sx={s.input}
          id="standard-basic2"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          color="primary"
          required
          autoComplete=""
          // value={value}
          // onChange={(event) => setValue(event.target.value)}
        />
        <Button fullWidth size="large" startIcon={<LoginIcon />}>
          Sign in
        </Button>
      </ThemeProvider>
    </Box>
  );
};

export default LoginModal;
