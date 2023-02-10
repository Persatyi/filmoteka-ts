import Container from "../Container";

import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Main = () => {
  return (
    <Box
      component="main"
      sx={{
        pt: { xs: "20px", sm: "60px" },
        pb: { xs: "40px", sm: "60px" },
      }}
    >
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Main;
