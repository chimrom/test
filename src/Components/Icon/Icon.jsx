import React from "react";
import clsx from "clsx";

const Icon = ({src, className}) => {
  return (
       <img src={src} alt='icon' className={clsx(className)}/>
  );
};

export default Icon;
