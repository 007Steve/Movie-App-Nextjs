import React from "react";
import styles from "../styles/Nav.module.css";
import Avatar from "@material-ui/core/Avatar";
function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__container}>
        <li className={styles.nav__link}>Home</li>
        <li className={styles.nav__link}>Movies</li>
        <li className={styles.nav__link}>Series</li>
        <li className={styles.nav__link}>TV</li>
      </ul>
      <Avatar className={styles.nav__pic}/>
    </nav>
  );
}

export default Nav;
