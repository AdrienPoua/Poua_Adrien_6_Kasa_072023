import React from "react";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import style from "./style.module.scss";
export default function Index() {
  return (
      <div className={style.container}>
        <div className={style.logo__wrapper}>
          <Logo />
        </div>
        <nav className={style.navBar}>
            <ul className={style.nav__links}>
          <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? `${style.active} ${style.nav__link}` : style.nav__link)}
              >
                Accueil
              </NavLink>
            </li>
            <li className={style.nav__link}>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? `${style.active} ${style.nav__link}` : style.nav__link)}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
    </div>
  );
}
