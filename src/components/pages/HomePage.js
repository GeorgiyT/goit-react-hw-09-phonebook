import React from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.headers}>
      <h1>Welcome</h1>
      <h2>Please login or register to use our Phonebook!</h2>
    </div>
  );
};

export default HomePage;
