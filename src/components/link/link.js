import React from "react";
import { cls } from "reactutils";

import "./style.scss";
const Link = ({ label, className , onClick}) => {
  return <span className={cls("customLink", className)} onClick={onClick}>{label}</span>;
};
export default Link;
