import ModalWrapper from "components/ModalWrapper";
import LoginModal from "components/Modals/LoginModal";

import { Tab } from "@mui/material";

import { useToggle } from "hooks";

import * as s from "./RegistrationField";

const RegistrationField = () => {
  const [openLogin, toggle, setLogin] = useToggle();
  const [openSignUp, toggleSignUp, setSignUp] = useToggle();
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
      <Tab label="SignUp" disableRipple sx={{ ...s.tab, ml: "40px" }} />
      <ModalWrapper open={openLogin} onClose={() => setLogin(false)}>
        <LoginModal onClose={() => setLogin(false)} />
      </ModalWrapper>
    </>
  );
};

export default RegistrationField;
