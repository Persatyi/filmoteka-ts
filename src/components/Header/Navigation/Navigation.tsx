import React from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";

import * as s from "./NavigationTheme";
import sprite from "assets/images/Sprite/sprite.svg";

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

const Navigation: React.FC = () => {
  const routeMatch = useRouteMatch(["/", "/library"]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <AppBar position="static" color="transparent">
      <Toolbar disableGutters sx={s.toolbar}>
        <svg width="24px" height="24px">
          <use href={`${sprite}#icon-film`}></use>
        </svg>
        <Tab
          label=" filmoteka"
          disableRipple
          value="/"
          to="/"
          component={Link}
          sx={s.label}
        />
        <Tabs
          value={currentTab}
          sx={{ ml: "auto" }}
          textColor="inherit"
          TabIndicatorProps={{
            style: { background: "#ff6b08", bottom: "30px" },
          }}
        >
          <Tab
            label="Home"
            disableRipple
            value="/"
            to="/"
            component={Link}
            sx={{ ...s.tab, mr: "40px" }}
          />
          <Tab
            label="My library"
            disableRipple
            value="/library"
            to="library"
            component={Link}
            sx={s.tab}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
