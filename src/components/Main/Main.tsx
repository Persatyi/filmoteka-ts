import Container from "../Container";

import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Main = () => {
  return (
    <Box component="main" sx={{ pt: "60px", pb: "60px" }}>
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Main;
