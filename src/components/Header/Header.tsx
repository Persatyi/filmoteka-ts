import { Box } from "@mui/material";

import Background from "./Background";
import Container from "components/Container";
import Navigation from "./Navigation";

const Header = () => {
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
        <Background />
        <Container>
          <Navigation />
        </Container>
      </Box>
    </>
  );
};

export default Header;
