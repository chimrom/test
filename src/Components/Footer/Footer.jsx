import React from "react";
import clsx from "clsx";
import InstagramIcon from '../../public/icons/instagram.svg'
import WhatsappIcon from '../../public/icons/whatsapp.svg'
import TelegramIcon from '../../public/icons/telegram.svg'
import Container from "../Container/Container";
import NavBarItem from "../NavBar/NavBarItem/NavBarItem";
import Icon from "../Icon/Icon";

import styles from "./Footer.module.css"

const navBarItems = [
    {text: "О клинике", path: "#"},
    {text: "Услуги", path: "#"},
    {text: "Специалисты", path: "#"},
    {text: "Цены", path: "#"},
    {text: "Контакты", path: "#"}
]

const Footer = () => {
    return <nav className={styles.footer_nav_bar}>
        <Container className={styles.container}>
            <i className={clsx('icon-logo', styles.logo)}/>
            <span className={styles.nav_bar_items}>
                {navBarItems.map(({text, path}) => <NavBarItem text={text} key={text} path={path}/>)}
            </span>
            <span className={styles.nav_bar_icons}>
                <Icon src={InstagramIcon} className={styles.footer_icon}/>
                <Icon src={WhatsappIcon} className={styles.footer_icon}/>
                <Icon src={TelegramIcon}/>
            </span>
         </Container>
        </nav>
}

export default Footer