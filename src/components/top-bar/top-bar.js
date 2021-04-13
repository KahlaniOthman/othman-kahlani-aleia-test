import React from "react";
import { cls } from "reactutils";

import Link from "components/link";
import Button from "components/button";

import { links } from "./helper";

import logo from "images/logo-aleia.png";

import "./style.scss";
const TopBar = ({ className }) => {
  return (
    <header className={cls("topBar", className)}>
      <img src={logo} alt="aleia" className="topBar-logo" />
      <div className="topBar-links">
        {links.map((el) => (
          <Link label={el.label} onClick={el.onClick} />
        ))}
      </div>
      <Button label="Contact us" className="topBar-button" />
      <div className="topBar-language">Fr</div>
    </header>
  );
};
export default TopBar;
