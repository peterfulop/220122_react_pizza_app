import React from "react";
import PizzaListElement from "./PizzaListElement";

const PizzaList = (props) => {
  return (
    <div className="pizza-list">
      {props.pizzaList.map((x) => {
        return (
          <PizzaListElement
            pizza={x}
            key={x.id}
            setOrderHandler={props.setOrderHandler}
          />
        );
      })}
    </div>
  );
};

export default PizzaList;
