import React from "react";
import PizzaListElement from "./PizzaListElement";

const PizzaList = ({ data }) => {
  return (
    <div className="pizza-list">
      {data.map((x) => {
        return <PizzaListElement pizza={x} key={x.id} />;
      })}
    </div>
  );
};

export default PizzaList;
