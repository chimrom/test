import React, { useState } from "react";
import clsx from "clsx";
import MyButton from "../UI/button/MyButton";
import NavBarItem from "../NavBar/NavBarItem/NavBarItem";
import Container from "../Container/Container";
import Menu from "./Menu/Menu";

import styles from "./HeaderMobile.module.css";

const navBarItems = [
  { text: "О клинике", path: "#" },
  { text: "Услуги", path: "#" },
  { text: "Специалисты", path: "#" },
  { text: "Цены", path: "#" },
  { text: "Контакты", path: "#" },
];

const HeaderMobile = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.wrapper_header_mobile}>
      <Container className={styles.container}>
        <div className={styles.burger_btn} onClick={() => setShow((s) => !s)}>
          <span></span>
        </div>
        <div className={styles.wrapper_content}>
          <i className={clsx("icon-logo", styles.logo)} />
        </div>
        <div className={styles.phone}>
          <a href="tel:+78630000000">+7(863) 000 00 00</a>
          <a href="#">Ростов-на-Дону</a>
        </div>
        <Menu show={show}>
          {navBarItems.map(({ text, path }) => (
            <NavBarItem text={text} key={text} path={path} />
          ))}
          <MyButton className={styles.menu_btn} text={"Записаться на прием"} />
        </Menu>
      </Container>
    </div>
  );
};

export default HeaderMobile;
