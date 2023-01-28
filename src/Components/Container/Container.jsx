import React from "react";
import clsx from "clsx";

import styles from "./Container.module.css"

const Container = ({children, className}) => 
    <div className={clsx(styles.container, className)}>
        {children}
    </div>

export default Container