import React from "react";
import MyButton from "../../UI/button/MyButton";
import Container from "../../Container/Container";

import styles from "./SliderItem.module.css";

const SliderItem = ({ title, subTitle, services, price, oldPrice }) => {
  return (
    <Container className={styles.slider_container}>
      <div className={styles.slider_content}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <div className={styles.slider_services}>
          {services.map(({ text }) => (
            <li className={styles.item_service} key={text}>
              {text}
            </li>
          ))}
        </div>
        <div className={styles.price_total}>
          <p>
            <span className={styles.new_price}>Всего {price}</span>
            <span className={styles.old_price}>{oldPrice}</span>
          </p>
        </div>
        <span className={styles.btn_block}>
          <MyButton text={"Записаться"} />
          <MyButton text={"Подробнее"} className={styles.btn_info} />
        </span>
      </div>
      <div className={styles.trapezoid}></div>
      <div className={styles.slider_img}></div>
    </Container>
  );
};

export default SliderItem;
