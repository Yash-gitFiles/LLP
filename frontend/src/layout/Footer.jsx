import React from "react";
import styles from "../styles/layout/footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <h1>Footer Title</h1>
      <p>Some footer text here.</p>
      <p>&copy; {new Date().getFullYear()} Your Company</p>
    </div>
  );
}

export default Footer;
