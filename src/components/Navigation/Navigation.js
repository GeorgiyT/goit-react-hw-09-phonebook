import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { isAuthenticated } from "../../auth/authSelector";
// import styles from "./Navigation.module.css";

const Navigation = ({ isAuth }) => {
  return (
    <ul className={""}>
      {!isAuth && (
        <li>
          <NavLink activeClassName={""} className={""} exact to="/">
            Home
          </NavLink>
        </li>
      )}
      {/* {isAuth && (
        <li>
          <NavLink activeClassName={""} className={""} exact to="/contacts">
            Phonebook
          </NavLink>
        </li>
      )} */}
    </ul>
  );
};

const mapStateToProps = state => ({
  isAuth: isAuthenticated(state)
});

export default connect(mapStateToProps)(Navigation);
