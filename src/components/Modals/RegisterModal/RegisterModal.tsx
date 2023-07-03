import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Formik } from "formik";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../../../services/firebase";
import { ValidationsReg } from "assets/schemas/authSchemas";

import * as s from "./RegisterModalTheme";
import sprite from "assets/images/Sprite/sprite.svg";

interface IProps {
  onClose: Function;
}

const RegisterModal: React.FC<IProps> = ({ onClose }) => {
  const registerHeandler = async (properties: {
    email: string;
    password: string;
    username: string;
  }) => {
    const { email, password, username } = properties;
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).catch((err) => console.log(err));
      console.log("🚀 ~ user:", user);

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: username,
        }).catch((err) => console.log(err));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        username: "",
        confirmPassword: "",
      }}
      validateOnBlur
      onSubmit={({ email, password, username }) => {
        registerHeandler({ email, password, username });
      }}
      validationSchema={ValidationsReg}
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
            Registaration
          </Typography>
          <ThemeProvider theme={s.theme}>
            <TextField
              sx={s.input}
              id="standard-basic6"
              label="Username"
              variant="outlined"
              type="text"
              name="username"
              fullWidth
              color={!isValid ? "success" : "primary"}
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              error={touched.username && errors.username ? true : false}
              helperText={
                touched.username && errors.username ? (
                  <Typography component="span" sx={s.errorMessage}>
                    {errors.username}
                  </Typography>
                ) : null
              }
            />
            <TextField
              sx={s.input}
              id="standard-basic3"
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
              id="standard-basic4"
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
            <TextField
              sx={s.input}
              id="standard-basic5"
              label="Confirm password"
              variant="outlined"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              color={!isValid ? "success" : "primary"}
              required
              autoComplete="off"
              value={values.confirmPassword}
              error={
                touched.confirmPassword && errors.confirmPassword ? true : false
              }
              helperText={
                touched.confirmPassword && errors.confirmPassword ? (
                  <Typography component="span" sx={s.errorMessage}>
                    {errors.confirmPassword}
                  </Typography>
                ) : null
              }
            />
            <Button
              fullWidth
              size="large"
              startIcon={<HowToRegIcon />}
              type="submit"
              disabled={!isValid && !dirty}
            >
              Sign up
            </Button>
          </ThemeProvider>
        </Box>
      )}
    </Formik>
  );
};

export default RegisterModal;
