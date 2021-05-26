import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import { addFilter } from "../redux/action";
import { getFilter } from "../redux/selectors";

const Filter = ({ value, addFilter }) => {
  return (
    <div className={styles.filter}>
      <h3 className={styles.filter__header}>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={value}
        onChange={e => addFilter(e.target.value)}
        className={styles.filter__input}
      />
    </div>
  );
};

Filter.propTypes = {
  addFilter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  value: getFilter(state)
});

const mapDispatchToProps = {
  addFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
