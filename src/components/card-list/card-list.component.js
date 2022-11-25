import React from "react";
import "./card-list.style.css";
import Card from "../cards/card.component";

const cardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster, id) => {
      return <Card key={id} monster={monster} />;
    })}
  </div>
);

export default cardList;
