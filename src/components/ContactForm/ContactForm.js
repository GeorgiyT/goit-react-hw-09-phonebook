import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import { connect } from "react-redux";
import * as operations from "../redux/operations.js";
import { getContacts } from "../redux/selectors";

function ContactForm({ contacts, addContact, fetchContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    fetchContact();
  }, [fetchContact]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name": {
        setName(value);
        break;
      }
      case "number": {
        setNumber(value);
        break;
      }
      default:
        console.log("ERROR");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    let acc = false;
    contacts.forEach(el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase() && (acc = true));
    acc ? alert(`${name} is already in contacts`) : addContact({ name, number });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Добавить</button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  fetchContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => ({
  contacts: getContacts(state)
});

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(operations.addContact(contact)),
  fetchContact: () => dispatch(operations.fetchContact())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
