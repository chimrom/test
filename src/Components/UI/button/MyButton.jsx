import React, { useState } from "react";
import clsx from "clsx";

import styles from "./MyButton.module.css";

const MyButton = ({ text, className, onClick }) => {
  return (
    <button className={clsx(styles.my_btn, className)} onClick={onClick}>
      {text}
    </button>
  );
};

export default MyButton;
