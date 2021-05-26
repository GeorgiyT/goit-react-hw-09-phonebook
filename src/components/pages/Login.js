import React, { useState } from "react";
import { connect } from "react-redux";
import * as authOperations from "../../auth/authOperations";
import styles from "./Login.module.css";

function Login({ isLoading, login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = e => {
    switch (e.target.name) {
      case "email": {
        setEmail(e.target.value);
        break;
      }
      case "password": {
        setPassword(e.target.value);
        break;
      }
      default:
        console.log("ERROR");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    login({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.contentBox}>
      <h1>Login</h1>
      <form action="onSubmit" onSubmit={handleSubmit}>
        <label>
          E-mail
          <input type="text" name="email" value={email} onChange={handleChange} />
        </label>
        <label>
          Password
          <input type="password" name="password" value={password} onChange={handleChange} />
        </label>
        <button type="submit">Login</button>
      </form>
      {isLoading && <h2 className={styles.contactList__header}>Загружаем....</h2>}
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: state.userAuth.isRequested
});

const mapDispatchToProps = {
  login: user => authOperations.login(user)
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
