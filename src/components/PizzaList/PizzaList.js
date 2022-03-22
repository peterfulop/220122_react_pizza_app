import React from "react";
import PizzaListElement from "./PizzaListElement";

const PizzaList = (props) => {
  return (
    <section className="pizza-list">
      {props.pizzaList.map((pizza) => {
        return (
          <PizzaListElement
            pizza={pizza}
            key={pizza.id}
            // setOrderHandler={props.setOrderHandler}
          />
        );
      })}
    </section>
  );
};

export default PizzaList;
