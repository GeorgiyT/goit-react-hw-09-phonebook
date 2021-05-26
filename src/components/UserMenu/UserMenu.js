import React from "react";
import { connect } from "react-redux";
import { isAuthenticated, getUserEmail } from "../../auth/authSelector";
import avatar from "../../image/avatar.jpg";
import * as authOperations from "../../auth/authOperations";
import styles from "./UserMenu.module.css";

const NavigationAuth = ({ isAuth, email, logoutFunc }) => {
  return (
    <>
      {isAuth && (
        <ul className={styles.list}>
          <li>
            <img src={avatar} alt="avatar" />
          </li>
          <li>{email}, </li>
          <li>
            <button type="button" onClick={logoutFunc}>
              Logout
            </button>
          </li>
        </ul>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  isAuth: isAuthenticated(state),
  email: getUserEmail(state)
});

const mapDispatchToProps = {
  logoutFunc: authOperations.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationAuth);
