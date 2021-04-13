import React from "react";
import { cls } from "reactutils";

import "./style.scss";
const Button = ({ label, className, onClick }) => {
  return (
    <button className={cls("customButton", className)} onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
