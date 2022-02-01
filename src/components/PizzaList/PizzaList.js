import React from "react";
import PizzaListElement from "./PizzaListElement";

const PizzaList = ({ data, onUpdateOrder }) => {
  return (
    <div className="pizza-list">
      {data.map((x) => {
        return (
          <PizzaListElement
            pizza={x}
            key={x.id}
            onUpdateOrder={onUpdateOrder}
          />
        );
      })}
    </div>
  );
};

export default PizzaList;
