import React, { useState } from "react";
import { connect } from "react-redux";
import * as authOperations from "../../auth/authOperations";
import styles from "./Register.module.css";

function Register({ isLoading, register }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = e => {
    switch (e.target.name) {
      case "name": {
        setName(e.target.value);
        break;
      }
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
    register({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.contentBox}>
      <h1>Register</h1>
      <form action="onSubmit" onSubmit={handleSubmit}>
        <label>
          Login
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          E-mail
          <input type="text" name="email" onChange={handleChange} />
        </label>
        <label>
          Password
          <input type="password" name="password" onChange={handleChange} />
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
  register: user => authOperations.register(user)
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
