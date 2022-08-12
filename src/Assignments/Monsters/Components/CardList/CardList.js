import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

function CardList({ monster }) {
  console.log(monster)
  return (
    <>
      <div className="cardList">
        {monster.map((cardData) => {
          return (
              <Card id={cardData.id} name={cardData.name} email={cardData.email} key={cardData.id} />
          )
        })}
      </div>
    </>
  );
}

export default CardList;
