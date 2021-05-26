import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import * as operations from "../redux/operations";
import { getVisibleContacts } from "../redux/selectors";

const ContactList = ({ contacts, isLoading, deleteContact }) => {
  return (
    <>
      {isLoading && <h2 className={styles.contactList__header}>Загружаем....</h2>}
      <ul className={styles.contactList}>
        {contacts.map(el => (
          <li key={el.id}>
            {el.name}: {el.number}
            <button type="button" name={el.id} onClick={() => deleteContact(el.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  isLoading: PropTypes.bool,
  deleteContact: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { contacts: getVisibleContacts(state), isLoading: state.phoneBook.isRequested };
};

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(operations.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
