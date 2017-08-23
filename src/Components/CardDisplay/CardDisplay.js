import React from "react";
import "./CardDisplay.css";
import Card from "../Card/Card";

const CardDisplay = ({
  itemData,
  favorites,
  favClicked,
  favCards,
  clickCard
}) => {
  let itemCard;

  if (favClicked) {
    const mappedFavs = favCards.map((el, i) => <Card key={i} itemData={el} />);
    return (
      <div className="outer-card-container">
        <section className="card-container">
          {mappedFavs}
          <div className="card-container-spacer" />
        </section>
        <div className="card-container-spacer" />
      </div>
    );
  }

  if (itemData) {
    itemCard = itemData.map((el, i) =>
      <Card key={i} itemData={el} favorites={favorites} clickCard={clickCard} />
    );
  }

  return (
    <div className="outer-card-container">
      <section className="card-container">
        {itemCard}
        <div className="card-container-spacer" />
      </section>
      <div className="card-container-spacer" />
    </div>
  );
};

export default CardDisplay;
