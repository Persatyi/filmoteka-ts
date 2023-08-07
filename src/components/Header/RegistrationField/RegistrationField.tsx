import React from "react";
import ModalWrapper from "components/ModalWrapper";
import LoginModal from "components/Modals/LoginModal";
import RegisterModal from "components/Modals/RegisterModal";

import { Tab } from "@mui/material";

import {useToggle} from "hooks";

import * as s from "./RegistrationFieldTheme";

const RegistrationField = () => {
  const [openLogin, , setLogin] = useToggle();
  const [openSignUp, , setSignUp] = useToggle();
  return (
    <>
      <Tab
        label="Login"
        onClick={() => {
          setLogin(true);
        }}
        disableRipple
        sx={{ ...s.tab }}
      />
      <Tab
        label="SignUp"
        disableRipple
        sx={{ ...s.tab, ml: "40px" }}
        onClick={() => {
          setSignUp(true);
        }}
      />
      <ModalWrapper
        open={openLogin}
        onClose={() => {
          setLogin(false);
        }}
      >
        <LoginModal onClose={() => setLogin(false)} />
      </ModalWrapper>
      <ModalWrapper
        open={openSignUp}
        onClose={() => {
          setSignUp(false);
        }}
      >
        <RegisterModal onClose={() => setSignUp(false)} />
      </ModalWrapper>
    </>
  );
};

export default RegistrationField;
