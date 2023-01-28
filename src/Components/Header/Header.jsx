import React from "react";
import MyButton from '../UI/button/MyButton'
import Icon from "../Icon/Icon";
import Container from "../Container/Container";

import styles from './Header.module.css'


const Header = () => {
return <div className={styles.wrapper}>
    <Container className={styles.container}>
        <span className={styles.wrapper_content}>
            <Icon/>
            <div>Place</div>
        </span>
        <span className={styles.wrapper_content}>
            <div>+7(863) 000 00 00</div>
            <MyButton/>
        </span>
    </Container>    
    </div>
}

export default Header