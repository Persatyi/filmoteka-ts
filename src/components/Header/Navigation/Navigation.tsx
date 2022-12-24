import React from "react";
import { NavLink } from "react-router-dom";

import { useWindowSize } from "hooks";

import s from "./Navigation.module.scss";
import sprite from "assets/images/Sprite/sprite.svg";

const Navigation: React.FC = () => {
  const { width } = useWindowSize();

  return (
    <nav>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink to="/" className={s.navLink}>
            <svg className={s.navSvg}>
              <use href={`${sprite}#icon-film`}></use>
            </svg>
            {width >= 480 && <p className={s.title}>Filmoteka</p>}
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/" className={s.navLink}>
            Home
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="library" className={s.navLink}>
            My library
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
