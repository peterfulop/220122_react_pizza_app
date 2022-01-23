import React from "react";
import Sauce from "./Sauce";

import "./Toppings.css";

const Toppings = (props) => {
  return (
    <ul className="pizza-list__element__toppings d-md-flex d-block flex-wrap">
      <li className="d-flex justify-content-center mb-3 m-md-1 p-0 bg-transparent">
        <Sauce sauce={props.sauce} />
      </li>
      {props.toppings.map((topping) => {
        return (
          <li className="m-1 d-flex justify-content-center" key={Math.random()}>
            {topping}
          </li>
        );
      })}
    </ul>
  );
};

export default Toppings;
