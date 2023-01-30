import React from "react";
import Container from "../Container/Container";

import styles from "./Main.module.css"

const Main = () => <div className={styles.wrapper}>
    <Container className={styles.main_container}>
        <span>
        <span className={styles.main_head}>
            <h1>
            Многопрофильная клиника для детей <br/>и взрослых
            </h1>
        </span>
        <span className={styles.main_text}>    
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
        </span>
        </span>
        <div>
        <img src="images/img.png"/>
        </div>
    </Container>    
 </div>

export default Main