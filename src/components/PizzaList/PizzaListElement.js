import React, { useContext } from "react";
import ChiliRate from "./ChiliRate";
import PizzaImage from "./PizzaImage";
import Toppings from "./Toppings";
import "./PizzaListElement.css";
import AddToBasket from "./AddToBasket";
import PizzaItemForm from "./PizzaItemForm";
import CartContext from "../../store/cart-context";

const PizzaListElement = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.pizza.id,
      name: props.pizza.name,
      amount: amount,
      price: props.pizza.price,
    });
  };

  return (
    <div className="pizza-list__element justify-content-between d-block d-sm-flex m-4 p-1">
      <div className="d-flex ms-0 m-sm-3 flex-column justify-content-top   align-items-center align-items-sm-start">
        <div className="pizza-list__element-namespace my-2 mx-3 mx-sm-0 d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-left align-items-center">
          <h3 className="pizza-list__element-heading text-center text-sm-start mb-1 mb-sm-0">
            {props.pizza.name}
          </h3>
          {props.pizza.chiliRate && <ChiliRate rate={props.pizza.chiliRate} />}
        </div>
        <Toppings toppings={props.pizza.toppings} sauce={props.pizza.sauce} />
      </div>
      <div className="d-md-flex d-block mx-3 text-center">
        <div className="orderbox d-flex flex-column justify-content-center align-items-center m-2">
          <div className="pricebox d-flex justify-content-center ms-5">
            {props.pizza.price} Ft
          </div>
          <PizzaItemForm onAddToCart={addToCartHandler} />
        </div>
        <PizzaImage image={props.pizza.image} />
      </div>
    </div>
  );
};

export default PizzaListElement;
