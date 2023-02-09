import React from "react";
import Container from "../Container/Container";
import NavBarItem from "./NavBarItem/NavBarItem";

import styles from "./NavBar.module.css";

const navBarItems = [
  {
    text: "О клинике",
    path: "https://rostov.hh.ru/resume/3c751ac8ff0b98b86e0039ed1f6477464e4939",
  },
  {
    text: "Услуги",
    path: "https://rostov.hh.ru/resume/3c751ac8ff0b98b86e0039ed1f6477464e4939",
  },
  {
    text: "Специалисты",
    path: "https://rostov.hh.ru/resume/3c751ac8ff0b98b86e0039ed1f6477464e4939",
  },
  {
    text: "Цены",
    path: "https://rostov.hh.ru/resume/3c751ac8ff0b98b86e0039ed1f6477464e4939",
  },
  {
    text: "Контакты",
    path: "https://rostov.hh.ru/resume/3c751ac8ff0b98b86e0039ed1f6477464e4939",
  },
];

const NavBar = () => {
  return (
    <nav className={styles.nav_bar}>
      <Container className={styles.container}>
        {navBarItems.map(({ text, path }) => (
          <NavBarItem text={text} key={text} path={path} />
        ))}
      </Container>
    </nav>
  );
};

export default NavBar;
