import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import LoginIcon from "@mui/icons-material/Login";

import * as s from "./LoginModalTheme";

interface IProps {
  onClose: Function;
}

const LoginModal: React.FC<IProps> = ({ onClose }) => {
  return (
    <Box
      sx={{
        width: "280px",
        position: "absolute",
        top: "10px",
        right: "10px",
        background: "#fff",
        padding: "30px",
      }}
      component="form"
    >
      <Typography align="center" component={"h3"} sx={{ color: "#000" }}>
        Login
      </Typography>
      <ThemeProvider theme={s.theme}>
        <TextField
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
