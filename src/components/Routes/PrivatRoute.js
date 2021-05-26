import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import { isAuthenticated } from "../../auth/authSelector";

const PrivateRoute = ({ component: Component, isAuthenticated, redirectTo, ...routeProps }) => (
  <Route {...routeProps} render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />)} />
);

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state)
});

export default connect(mapStateToProps)(PrivateRoute);
