import axios from "axios";

import token from "../../auth/token";

import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError
} from "./action";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const fetchContact = () => async (dispatch, getState) => {
  token.set(getState().userAuth.token);

  dispatch(fetchContactRequest());

  try {
    const responce = await axios.get("/contacts");
    dispatch(fetchContactSuccess(responce.data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

const addContact = contact => async (dispatch, getState) => {
  token.set(getState().userAuth.token);

  dispatch(addContactRequest());

  try {
    const responce = await axios.post("/contacts", contact);
    dispatch(addContactSuccess(responce.data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const deleteContact = id => async (dispatch, getState) => {
  token.set(getState().userAuth.token);

  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

export { fetchContact, addContact, deleteContact };
