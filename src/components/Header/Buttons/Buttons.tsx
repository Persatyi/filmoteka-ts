import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Wrapper } from "./ButtonsTheme";
import NavigationBtn from "../NavigationBtn/NavigationBtn";

const Buttons: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <Link to="library">
        <NavigationBtn
          variant={pathname === "/library" ? "contained" : "outlined"}
          size="large"
        >
          Watched
        </NavigationBtn>
      </Link>
      <Link to="queue">
        <NavigationBtn
          variant={pathname === "/queue" ? "contained" : "outlined"}
          size="large"
        >
          queue
        </NavigationBtn>
      </Link>
    </Wrapper>
  );
};

export default Buttons;
