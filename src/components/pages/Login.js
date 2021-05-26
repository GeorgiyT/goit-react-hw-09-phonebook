import React, { Component } from "react";
import { connect } from "react-redux";
import * as authOperations from "../../auth/authOperations";
import styles from "./Login.module.css";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className={styles.contentBox}>
        <h1>Login</h1>
        <form action="onSubmit" onSubmit={this.handleSubmit}>
          <label>
            E-mail
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Password
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <button type="submit" onClick={() => {}}>
            Login
          </button>
        </form>
        {this.props.isLoading && <h2 className={styles.contactList__header}>Загружаем....</h2>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.userAuth.isRequested
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(authOperations.login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
