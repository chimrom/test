import React from "react";
import clsx from "clsx";

const Icon = ({ src, className, onClick }) => {
  return (
    <img src={src} alt="icon" className={clsx(className)} onClick={onClick} />
  );
};

export default Icon;
