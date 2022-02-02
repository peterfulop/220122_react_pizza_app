import React from "react";
import PizzaListElement from "./PizzaListElement";

const PizzaList = ({ pizzaList, setOrderHandler }) => {
  return (
    <div className="pizza-list">
      {pizzaList.map((x) => {
        return (
          <PizzaListElement
            pizza={x}
            key={x.id}
            setOrderHandler={setOrderHandler}
          />
        );
      })}
    </div>
  );
};

export default PizzaList;
