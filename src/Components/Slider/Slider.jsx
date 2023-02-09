import React, { useState, useEffect } from "react";
import ArrowIcon from "../../public/icons/arrow.svg";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import SliderItem from "./SliderItem/SliderItem";
import data from "./SliderData";

import styles from "./Slider.module.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < data.length - 1) {
        setCurrentIndex((prevState) => prevState + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const { title, subTitle, services, price, oldPrice } = data[currentIndex];

  const handleLeftArrowClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    } else {
      setCurrentIndex(data.length - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <Container className={styles.slider_container}>
      <SliderItem
        title={title}
        key={subTitle}
        subTitle={subTitle}
        services={services}
        price={price}
        oldPrice={oldPrice}
      />
      <div className={styles.slider_menu}>
        <Icon
          src={ArrowIcon}
          className={styles.arrow_left}
          onClick={handleLeftArrowClick}
        />
        <p>
          {currentIndex + 1}
          <span className={styles.grey}>/{data.length}</span>
        </p>
        <Icon
          src={ArrowIcon}
          className={styles.arrow_right}
          onClick={handleRightArrowClick}
        />
      </div>
    </Container>
  );
};

export default Slider;
