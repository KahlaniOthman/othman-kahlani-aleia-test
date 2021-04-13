import React from "react";

import netFond from "images/net-fond.png";

import "./style.scss";
const TopSection = () => {
  return (
    <section
      className="topSection"
      style={{
        backgroundImage: `url(${netFond})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="topSection-left">
        <h1 className="topSection-left-title">
          BE CAREFUL TO RESPECT THE DESIGN!
        </h1>
        <p className="topSection-left-paragraph">
          Technologies : HTML CSS JS <br />
          Détail des specs front : Zeplin <br />
          3 maquettes desktop, tablet et mobile, 2 breakpoints <br />
          Desktop/tablet : 1200px (Desktop) / 1199 tablet <br />
          Tablet / Mobile : 600px (Tablet) / 599 (mobile)
        </p>
        <button className="topSection-left-btn">Let's discover</button>
      </div>
    </section>
  );
};
export default TopSection;
