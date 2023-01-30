import React from "react";
import ArrowIcon from "../../public/icons/arrow.svg";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import SliderItem from "./SliderItem/SliderItem";


import styles from "./Slider.module.css"

const sliderItems = [{
    headerOne: "CHECK-UP",
    headerTwo: "для мужчин",
    services:[
    {text: "Гормональный скрининг"},
    {text: "Тестестерон"},
    {text: "Свободный тестестерон"},
    {text: "Глобулинг, связывающий половые гормоны"}
],
    price: 2800,
    oldPrice: 3500
}]

const Slider = () => <Container className={styles.container}>
    <div className={styles.slider}>
    {
    sliderItems.map(({headerOne, headerTwo, services, price, oldPrice}) => 
    <SliderItem headerOne={headerOne} key={headerOne} headerTwo={headerTwo} services={services} price={price} oldPrice={oldPrice}/> 
    )}
    </div>
    <div className={styles.slider_menu}>
    <Icon src={ArrowIcon}/>
    <p>1<span className={styles.grey}>/{sliderItems.length}</span></p>
    <Icon src={ArrowIcon} className={styles.arrow_right}/>
    </div>
</Container>

export default Slider