import React from "react";
import PizzaListElement from "./PizzaListElement";

const PizzaList = (props) => {
  return (
    <div className="pizza-list">
      {props.data.map((x) => {
        return <PizzaListElement pizza={x} key={Math.random()} />;
      })}
    </div>
  );
};

export default PizzaList;
