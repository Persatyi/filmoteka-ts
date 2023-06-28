import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import * as s from "./RegisterModalTheme";
import sprite from "assets/images/Sprite/sprite.svg";

interface IProps {
  onClose: Function;
}

const RegisterModal: React.FC<IProps> = ({ onClose }) => {
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
        Registaration
      </Typography>
      <ThemeProvider theme={s.theme}>
        <TextField
          sx={s.input}
          id="standard-basic3"
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
          id="standard-basic4"
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
        <TextField
          sx={s.input}
          id="standard-basic5"
          label="Confirm password"
          variant="outlined"
          type="password"
          fullWidth
          color="primary"
          required
          autoComplete=""
          // value={value}
          // onChange={(event) => setValue(event.target.value)}
        />
        <Button fullWidth size="large" startIcon={<HowToRegIcon />}>
          Sign up
        </Button>
      </ThemeProvider>
    </Box>
  );
};

export default RegisterModal;
