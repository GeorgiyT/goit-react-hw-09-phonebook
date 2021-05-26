import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import styles from "./PhoneBook.module.css";

class PhoneBook extends Component {
  render() {
    return (
      <>
        {this.props.isLoading ? (
          <h2 className={styles.contactList__header}>Загружаем....</h2>
        ) : (
          <>
            <h2 className={styles.headers}>Phonebook</h2>
            <ContactForm />
            <h2 className={styles.headers}>Contacts</h2>
            <Filter />
            <ContactList />
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.userAuth.isRequested
});

export default connect(mapStateToProps)(PhoneBook);
