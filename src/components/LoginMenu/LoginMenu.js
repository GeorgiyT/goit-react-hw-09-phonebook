import React from "react";
import { NavLink } from "react-router-dom";
import sytles from "./LoginMenu.module.css";

const LoginMenu = () => {
  return (
    <>
      <ul className={sytles.list}>
        <li>
          <NavLink activeClassName={""} className={""} to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={""} className={""} to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default LoginMenu;
