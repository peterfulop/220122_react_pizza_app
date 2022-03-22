import React from "react";
import PizzaListElement from "./PizzaListElement";

const PizzaList = (props) => {
  return (
    <section>
      {props.pizzaList.map((pizza) => {
        return <PizzaListElement pizza={pizza} key={pizza.id} />;
      })}
    </section>
  );
};

export default PizzaList;
