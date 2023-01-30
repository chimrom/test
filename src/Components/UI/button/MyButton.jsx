import React from "react";
import clsx from "clsx";

import styles from './MyButton.module.css'

const MyButton = ({text,className}) => {
 return (
    <button className={clsx(styles.my_btn, className)}>
        {text}
    </button>
 )
}

export default MyButton