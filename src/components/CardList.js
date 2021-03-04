import React from "react";
import Card from "./Card.js";

const CardList = ({ fans, onDelete }) => {
  return (
    <>
      {fans.map((user, i) => {
        return (
          <Card
            key={fans[i].id}
            id={fans[i].id}
            name={fans[i].name}
            email={fans[i].email}
            onDelete={onDelete}
          />
        );
      })}
    </>
  );
};

export default CardList;
