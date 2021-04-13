import React from "react";

import Button from "components/button";

import "./style.scss";
const ParagraphSection = () => {
  return (
    <section className="paragraphSection">
      <h2 className="paragraphSection-title">
        Good luck about this block. Don’t forget to respect the different
        breakpoints
      </h2>
      <div className="paragraphSection-right">
        <p className="paragraphSection-right-parag">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.{" "}
        </p>
        <Button label="hang in there" className="paragraphSection-right-btn" />
      </div>
    </section>
  );
};
export default ParagraphSection;
