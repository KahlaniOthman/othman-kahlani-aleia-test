import React from "react";

import logoAleia from "images/logo-aleia.png";
import burgerMenu from "images/burger-menu.png";

import "./style.scss";
const ResponsiveTopBar = () => {
  return (
    <header className="responsiveTopBar">
      <img src={logoAleia} alt="aleia" className="responsiveTopBar-logo" />
      <img src={burgerMenu} alt="burger" className="responsiveTopBar-logo" />
    </header>
  );
};
export default ResponsiveTopBar;
