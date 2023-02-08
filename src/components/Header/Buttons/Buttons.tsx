import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import * as s from "./ButtonsTheme";

const Buttons: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Box sx={s.box}>
      <ThemeProvider theme={s.theme}>
        <Button
          variant={pathname === "/library" ? "contained" : "outlined"}
          to="library"
          component={Link}
          size="large"
        >
          Watched
        </Button>
        <Button
          variant={pathname === "/queue" ? "contained" : "outlined"}
          to="queue"
          component={Link}
          size="large"
        >
          queue
        </Button>
      </ThemeProvider>
    </Box>
  );
};

export default Buttons;
