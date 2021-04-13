import React from "react";

import "./style.scss";
const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={data.icon} alt="card" className="card-img" />
      <h2 className="card-title">{data.title}</h2>
      <p className="card-description">{data.description}</p>
    </div>
  );
};
export default Card;
