import React, { useMemo, useEffect } from "react";

import styles from "./Menu.module.css";
import { createPortal } from "react-dom";

const portalRootElement = document.querySelector("#portal");

const Menu = ({ show, children }) => {
  const element = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    portalRootElement.appendChild(element);

    return () => {
      portalRootElement.removeChild(element);
    };
  });
  if (!show) return null;
  return createPortal(
    <div className={styles.menu}>
      <div>{children}</div>
    </div>,
    element
  );
};

export default Menu;
