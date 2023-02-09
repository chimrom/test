import React from "react";

import "./Modal.css";

const Modal = ({ isActive, setIsActive, children }) => {
  return (
    <div
      className={isActive ? "modal active" : "modal"}
      onClick={() => setIsActive(false)}
    >
      <div
        className={isActive ? "modal_content active" : "modal_content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
