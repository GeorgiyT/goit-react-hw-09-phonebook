import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import { isAuthenticated } from "../../auth/authSelector";

const PublicRoute = ({ component: Component, isAuthenticated, redirectTo, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props => (isAuthenticated && routeProps.restricted ? <Redirect to={redirectTo} /> : <Component {...props} />)}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state)
});

export default connect(mapStateToProps)(PublicRoute);
