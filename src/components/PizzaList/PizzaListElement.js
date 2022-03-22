import React, { useContext } from "react";
import ChiliRate from "./ChiliRate";
import PizzaImage from "./PizzaImage";
import Toppings from "./Toppings";
import styles from "./PizzaListElement.module.css";
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
    <div
      className={`${styles["pizza-list-element"]} justify-content-between d-block d-sm-flex m-4 p-1`}
    >
      <div
        className={`d-flex ms-0 m-sm-3 flex-column justify-content-top align-items-center align-items-sm-start`}
      >
        <div className="pizza-list-element-namespace my-2 mx-3 mx-sm-0 d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-left align-items-center">
          <h3
            className={`${styles["pizza-list-element-heading"]} text-center text-sm-start mb-1 mb-sm-0`}
          >
            {props.pizza.name}
          </h3>
          {props.pizza.chiliRate && <ChiliRate rate={props.pizza.chiliRate} />}
        </div>
        <PizzaImage className="d-sm-none" image={props.pizza.image} />

        <Toppings toppings={props.pizza.toppings} sauce={props.pizza.sauce} />
      </div>
      <div className={` ${styles["right-area"]} d-block d-md-flex`}>
        <div
          className={`${styles.orderbox} d-flex flex-column justify-content-center align-items-center m-3`}
        >
          <div
            className={`${styles.pricebox} d-flex justify-content-center ms-5`}
          >
            {props.pizza.price} Ft
          </div>
          <PizzaItemForm onAddToCart={addToCartHandler} />
        </div>
        <div className="d-flex justify-content-center">
          <PizzaImage className="d-none d-sm-flex" image={props.pizza.image} />
        </div>
      </div>
    </div>
  );
};

export default PizzaListElement;
