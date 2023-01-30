import React from "react";
import clsx from "clsx";
import Placeholder from "../../public/icons/placeholder.svg"
import WhatsappHeader from "../../public/icons/whatsappHeader.svg"
import MyButton from '../UI/button/MyButton'
import Container from "../Container/Container";
import Icon from "../Icon/Icon";


import styles from './Header.module.css'


const Header = () => {
return <div className={styles.wrapper}>
    <Container className={styles.container}>
        <span className={styles.wrapper_content}>
            <i className={clsx('icon-logo', styles.logo)}/>
            <div className={styles.geolocation}>
                <span className={styles.placeholder}>
                <Icon src={Placeholder}/>
                </span>
                <a href="#">Ростов-на-Дону<br/> <span className={styles.text}>ул. Ленина, 2Б</span></a>
            </div>
        </span>
        <span className={styles.wrapper_content}>
            <Icon src={WhatsappHeader}/>
            <div>
                <span className={styles.phone}>
                    <a href="tel:+78630000000">+7(863) 000 00 00</a>
                </span>
            </div>
            <MyButton text={'Записаться на прием'}/>
        </span>
    </Container>    
    </div>
}

export default Header