import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import { connect } from "react-redux";
import * as operations from "../redux/operations.js";
import { getContacts } from "../redux/selectors";

class ContactForm extends React.Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    fetchContact: PropTypes.func.isRequired
  };

  state = {
    name: "",
    number: ""
  };

  componentDidMount() {
    this.props.fetchContact();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    let acc = false;

    this.props.contacts.forEach(el => el.name.toLocaleLowerCase() === this.state.name.toLocaleLowerCase() && (acc = true));

    acc ? alert(`${this.state.name} is already in contacts`) : this.props.addContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.contactForm}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Добавить</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { contacts: getContacts(state) };
};

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(operations.addContact(contact)),
  fetchContact: () => dispatch(operations.fetchContact())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
