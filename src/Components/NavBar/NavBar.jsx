import React from "react";
import Container from "../Container/Container"
import NavBarItem from "./NavBarItem/NavBarItem";

import styles from "./NavBar.module.css"

const navBarItems = [
    {text: "О клинике", path: "#"},
    {text: "Услуги", path: "#"},
    {text: "Специалисты", path: "#"},
    {text: "Цены", path: "#"},
    {text: "Контакты", path: "#"}
]

const NavBar = () => {
    return <nav className={styles.nav_bar}>
        <Container className={styles.container}>
         {navBarItems.map(({text, path}) => <NavBarItem text={text} key={text} path={path}/>)}
         </Container>
        </nav>
}

export default NavBar