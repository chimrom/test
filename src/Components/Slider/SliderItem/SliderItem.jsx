import React from "react";
import MyButton from "../../UI/button/MyButton";
import SliderItemService from "./SliderItemService/SliderItemService";
import Container from "../../Container/Container";

import styles from "./SliderItem.module.css"




const SliderItem = ({headerOne, headerTwo, services, price, oldPrice}) => {
    return <Container className={styles.slider_container}>
        <div className={styles.slider_content}>
            <h1>
                {headerOne}
            </h1>
            <h2>
                {headerTwo}
            </h2>
            {
            services.map(({text}) => <SliderItemService text={text}/>) 
            }
            <div className={styles.price_total}>
                <p>
                <span className={styles.new_price}>
                Всего {" "}
                {price}
                </span>
                <span className={styles.old_price}>    
                {oldPrice}
                </span>
                </p>
            </div>
            <span className={styles.btn_block}>
            <MyButton text={'Записаться'}/>
            <MyButton text={'Подробнее'} className={styles.btn_info}/>
            </span>
    </div>
    <div className={styles.trapezoid}>
    </div>
    <div className={styles.slider_img}>
    </div>
    </Container>
}


export default SliderItem