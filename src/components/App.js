import React, { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
// import PhoneBook from "./pages/PhoneBook";
// import HomePage from "./pages/HomePage";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import LoginMenu from "./LoginMenu/LoginMenu";
import { connect } from "react-redux";
import * as authOperations from "../auth/authOperations";
import { isAuthenticated } from "../auth/authSelector";
import UserMenu from "./UserMenu/UserMenu";
import PrivatRoute from "./Routes/PrivatRoute";
import PublicRoute from "./Routes/PublicRoute";
import styles from "./App.module.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const PhoneBook = lazy(() => import("./pages/PhoneBook"));

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    return (
      <>
        <div className={styles.app}>
          <Navigation />
          {this.props.isAuth ? <UserMenu /> : <LoginMenu />}
        </div>
        <Suspense fallback={<p>Downloading...</p>}>
          <Switch>
            <PublicRoute exact path="/" restricted component={HomePage} redirectTo="/contacts" />
            <PublicRoute path="/login" component={Login} restricted redirectTo="/contacts" />
            <PublicRoute path="/register" component={Register} restricted redirectTo="/contacts" />
            <PrivatRoute path="/contacts" component={PhoneBook} redirectTo="/login" />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: isAuthenticated(state)
});

const mapDispatchToProps = {
  getCurrentUser: authOperations.currentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
