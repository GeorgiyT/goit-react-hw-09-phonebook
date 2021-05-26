import { createAction } from "@reduxjs/toolkit";

export const registerUserRequest = createAction("registerUserRequest");
export const registerUserSuccess = createAction("registerUserSuccess");
export const registerUserError = createAction("registerUserError");

export const loginUserRequest = createAction("loginUserRequest");
export const loginUserSuccess = createAction("loginUserSuccess");
export const loginUserError = createAction("loginUserError");

export const logoutUserRequest = createAction("logoutUserRequest");
export const logoutUserSuccess = createAction("logoutUserSuccess");
export const logoutUserError = createAction("logoutUserError");

export const currentUserRequest = createAction("currentUserRequest");
export const currentUserSuccess = createAction("currentUserSuccess");
export const currentUserError = createAction("currentUserError");
