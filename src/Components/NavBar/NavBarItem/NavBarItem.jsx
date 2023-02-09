import React from "react";

import styles from "./NavBarItem.module.css";

const NavBarItem = ({ text, path }) => (
  <li className={styles.nav_bar_item}>
    <a href={path}>{text}</a>
  </li>
);

export default NavBarItem;
