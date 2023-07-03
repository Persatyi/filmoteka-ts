import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import LoginIcon from "@mui/icons-material/Login";
import { Formik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "services/firebase";
import { ValidationLogin } from "assets/schemas/authSchemas";

import * as s from "./LoginModalTheme";
import sprite from "assets/images/Sprite/sprite.svg";

interface IProps {
  onClose: Function;
}

const LoginModal: React.FC<IProps> = ({ onClose }) => {
  const loginHeandler = async (properties: {
    email: string;
    password: string;
  }) => {
    const { email, password } = properties;
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("🚀 ~ user:", user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnBlur
      onSubmit={({ email, password }) => {
        loginHeandler({ email, password });
      }}
      validationSchema={ValidationLogin}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        dirty,
      }) => (
        <Box
          sx={{
            width: "280px",
            position: "absolute",
            background: "#fff",
            padding: "30px",
          }}
          component="form"
          onSubmit={handleSubmit}
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
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              color={!isValid ? "success" : "primary"}
              required
              value={values.email}
              autoComplete="email"
              error={touched.email && errors.email ? true : false}
              helperText={
                touched.email && errors.email ? (
                  <Typography component="span" sx={s.errorMessage}>
                    {errors.email}
                  </Typography>
                ) : null
              }
            />
            <TextField
              sx={s.input}
              id="standard-basic2"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              fullWidth
              color={!isValid ? "primary" : "success"}
              required
              autoComplete="off"
              onBlur={handleBlur}
              value={values.password}
              onChange={handleChange}
              error={touched.password && errors.password ? true : false}
              helperText={
                touched.password && errors.password ? (
                  <Typography component="span" sx={s.errorMessage}>
                    {errors.password}
                  </Typography>
                ) : null
              }
            />
            <Button
              fullWidth
              size="large"
              startIcon={<LoginIcon />}
              type="submit"
              disabled={!isValid && !dirty}
            >
              Sign in
            </Button>
          </ThemeProvider>
        </Box>
      )}
    </Formik>
  );
};

export default LoginModal;
