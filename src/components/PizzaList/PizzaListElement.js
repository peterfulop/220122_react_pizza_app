import React from "react";
import ChiliRateIcon from "./ChiliRateIcon";
import PizzaImage from "./PizzaImage";
import Toppings from "./Toppings";

const PizzaListElement = ({ pizza }) => {
  return (
    <div className="pizza-list__element justify-content-between d-block d-sm-flex m-4 p-1">
      <div className="pizza-list__element__first d-flex ms-0 m-sm-3 flex-column justify-content-center align-items-center align-items-sm-start">
        <div className="pizza-list__element-namespace my-2 mx-3 mx-sm-0 d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-left align-items-center">
          <h3 className="pizza-list__element-heading text-center text-sm-start mb-1 mb-sm-0">
            {pizza.name}
          </h3>
          {pizza.chiliRate ? <ChiliRateIcon rate={pizza.chiliRate} /> : ""}
        </div>
        <Toppings toppings={pizza.toppings} sauce={pizza.sauce} />
      </div>
      <div className="pizza-list__element__last d-md-flex d-block text-center">
        <div className="orderbox align-items-center align-items-sm-start">
          <div className="pricebox d-flex justify-content-center ms-5">
            {pizza.price} Ft
          </div>
        </div>
        <PizzaImage image={pizza.image} />
      </div>
    </div>
  );
};

export default PizzaListElement;
