import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css"
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export default function Navigation() {
  
  return (
    <>
      <nav className={s.nav}>
        <NavLink to='/' className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to='/movies' className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </>
  );
}