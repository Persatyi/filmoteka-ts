import React from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";

import { useWindowSize } from "hooks";

// import s from "./Navigation.module.scss";
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
  const { width } = useWindowSize();

  const routeMatch = useRouteMatch(["/", "/library"]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <AppBar position="static" color="secondary" sx={{}}>
      <Toolbar
        disableGutters
        sx={{ minHeight: 0, display: "flex", alignItems: "baseline" }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "baseline" }}>
          <svg width="24px" height="24px" style={{ marginRight: 10 }}>
            <use href={`${sprite}#icon-film`}></use>
          </svg>
          {width >= 480 && (
            <Typography
              variant="h6"
              noWrap
              component="p"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "Roboto, sans-serif",
                fontSize: 30,
                lineHeight: 1.16,
                fontWeight: 500,
                letterSpacing: ".01rem",
                color: "primary.main",
                textDecoration: "none",
                textTransform: "capitalize",
              }}
            >
              filmoteka
            </Typography>
          )}
        </Link>

        <Tabs value={currentTab}>
          <Tab label="Home" disableRipple value="/" to="/" component={Link} />
          <Tab
            label="My library"
            disableRipple
            value="/library"
            to="library"
            component={Link}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;

// return (
//   <nav>
//     <ul className={s.navList}>
//       <li className={s.navItem}>
//         <NavLink to="/" className={s.navLink}>
//           <svg className={s.navSvg}>
//             <use href={`${sprite}#icon-film`}></use>
//           </svg>
//           {width >= 480 && <p className={s.title}>Filmoteka</p>}
//         </NavLink>
//       </li>
//       <li className={s.navItem}>
//         <NavLink to="/" className={s.navLink}>
//           Home
//         </NavLink>
//       </li>
//       <li className={s.navItem}>
//         <NavLink to="library" className={s.navLink}>
//           My library
//         </NavLink>
//       </li>
//     </ul>
//   </nav>
// );
