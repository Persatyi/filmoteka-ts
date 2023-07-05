import React, { useState } from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import { AppBar, Toolbar, Tabs, Tab, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";

import * as s from "./NavigationTheme";
import sprite from "assets/images/Sprite/sprite.svg";
import UserDisplay from "components/Header/UserDisplay/UserDisplay";

import SearchField from "../SearchField";
import RegistrationField from "../RegistrationField";
import Buttons from "../Buttons";

import { useAppDispatch } from "hooks/hooks";
import { useAuth } from "hooks/useAuth";
import { setPopular } from "redux/dataSlice/dataSlice";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

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

const Navigation = () => {
  const dispatch = useAppDispatch();

  const theme = useTheme();

  const { isAuth } = useAuth();

  const routeMatch = useRouteMatch(["/", "/library"]);
  const currentTab = routeMatch?.pattern?.path;
  const [value, setValue] = useState(currentTab === "/" ? 0 : 1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
    dispatch(setPopular());
  };

  return (
    <>
      <AppBar position="static" color="transparent" sx={{ boxShadow: "unset" }}>
        <Toolbar
          disableGutters
          style={{
            minHeight: "0px",
            display: "flex",
            alignItems: "baseline",
          }}
        >
          <Tab
            disableRipple
            icon={
              <svg width="24px" height="24px">
                <use href={`${sprite}#icon-film`}></use>
              </svg>
            }
            value={0}
            to="/"
            component={Link}
            sx={s.icon}
            onClick={() => handleChangeIndex(0)}
          />
          <Tab
            icon={
              <svg width="24px" height="24px" style={{ margin: "0px" }}>
                <use href={`${sprite}#icon-film`}></use>
              </svg>
            }
            label=" filmoteka"
            disableRipple
            value={0}
            to="/"
            component={Link}
            sx={s.label}
            iconPosition="start"
            onClick={() => handleChangeIndex(0)}
          />

          {isAuth ? (
            <>
              <Tabs
                onChange={handleChange}
                value={value}
                sx={{ ml: "auto", minHeight: "0px" }}
                textColor="inherit"
                TabIndicatorProps={{
                  style: { background: "#ff6b08" },
                }}
              >
                <Tab
                  label="Home"
                  disableRipple
                  value={0}
                  to="/"
                  component={Link}
                  sx={{ ...s.tab, mr: "40px" }}
                />
                <Tab
                  label="My library"
                  disableRipple
                  value={1}
                  to="library"
                  component={Link}
                  sx={s.tab}
                />
              </Tabs>
              <Box component="div" sx={{ ml: "40px" }}>
                <UserDisplay />
              </Box>
            </>
          ) : (
            <Box component="div" sx={{ ml: "auto" }}>
              <RegistrationField />
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <SearchField />
        </TabPanel>
        {isAuth ? (
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Buttons />
          </TabPanel>
        ) : (
          <></>
        )}
      </SwipeableViews>
    </>
  );
};

export default Navigation;
