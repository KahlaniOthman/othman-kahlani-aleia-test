import React from "react";

import Card from "components/card";

import { cardsData } from "./helper";

import "./style.scss";
const CardsContainer = () => {
  return (
    <section className="cardsContainer">
      {cardsData.map((el) => (
        <Card data={el} />
      ))}
    </section>
  );
};

export default CardsContainer;
