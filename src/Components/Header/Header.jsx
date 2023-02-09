import React from "react";
import clsx from "clsx";
import Placeholder from "../../public/icons/placeholder.svg";
import WhatsappHeader from "../../public/icons/whatsappHeader.svg";
import MyButton from "../UI/button/MyButton";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import NavBar from "../NavBar/NavBar";
// import Modal from "../Modal/Modal";

import styles from "./Header.module.css";

const Header = () => {
  // const [isActive, setIsActive] = useState(false);
  // const openModal = () => {
  //   setIsActive(true);
  // };
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <span className={styles.wrapper_content}>
          <i className={clsx("icon-logo", styles.logo)} />
          <div className={styles.geolocation}>
            <span className={styles.placeholder}>
              <Icon src={Placeholder} />
            </span>
            <a href="https://rostov.hh.ru/resume/3c751ac8ff0b98b86e0039ed1f6477464e4939">
              Ростов-на-Дону
              <br /> <span className={styles.text}>ул. Ленина, 2Б</span>
            </a>
          </div>
        </span>
        <span className={styles.wrapper_content}>
          <Icon src={WhatsappHeader} />
          <div>
            <span className={styles.phone}>
              <a href="tel:+78630000000">+7(863) 000 00 00</a>
            </span>
          </div>
          <MyButton text={"Записаться на прием"} />
          {/* <Modal isActive={isActive} setIsActive={setIsActive}>
            форма
          </Modal> */}
        </span>
      </Container>
      <NavBar />
    </div>
  );
};

export default Header;
