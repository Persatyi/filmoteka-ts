import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import Background from "./Background";
import Container from "components/Container";
import Navigation from "./Navigation";
import RegistrationField from "./RegistrationField";

const Header = () => {
  const { pathname } = useLocation();
  const [value, setValue] = useState(pathname === "/" ? 0 : 1);

  return (
    <>
      <Box
        component="header"
        sx={{
          height: "230px",
          pt: "45px",
          backgroundColor: "#545454",
          width: "100%",
        }}
      >
        <Background type={value} />
        <Container>
          <Navigation update={setValue} />
          <RegistrationField />
        </Container>
      </Box>
    </>
  );
};

export default Header;
