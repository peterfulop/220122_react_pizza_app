import React, { useState } from "react";
import ChiliRate from "./ChiliRate";
import PizzaImage from "./PizzaImage";
import Toppings from "./Toppings";
import OrderButton from "./OrderButton";
import AmountButton from "./AmountButton";
import "./PizzaListElement.css";

const PizzaListElement = ({ pizza, onSetOrder, onUpdateOrder }) => {
  const [amount, setAmount] = useState(0);
  const [amountVisibility, setAmountVisibility] = useState(false);

  const setUserOrders = (add) => {
    onSetOrder(pizza.id, add, false, amount);
  };

  const orderOrDont = (order) => {
    if (order) {
      setAmount(1);
      setUserOrders(order);
      // onUpdateOrder();
    } else {
      setAmount(0);
      onSetOrder(pizza.id, false, true);
      // onUpdateOrder();
    }
    setAmountVisibility(order);
  };

  const plusAmountHandler = () => {
    if (amount === 10) return;
    setAmount(parseInt(amount) + 1);
    setUserOrders(true);
  };

  const minusAmountHandler = () => {
    if (amount === 1) return;
    setAmount(parseInt(amount) - 1);
    setUserOrders(false);
  };

  return (
    <div className="pizza-list__element justify-content-between d-block d-sm-flex m-4 p-1">
      <div className="d-flex ms-0 m-sm-3 flex-column justify-content-top   align-items-center align-items-sm-start">
        <div className="pizza-list__element-namespace my-2 mx-3 mx-sm-0 d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-left align-items-center">
          <h3 className="pizza-list__element-heading text-center text-sm-start mb-1 mb-sm-0">
            {pizza.name}
          </h3>
          {pizza.chiliRate ? <ChiliRate rate={pizza.chiliRate} /> : ""}
        </div>
        <Toppings toppings={pizza.toppings} sauce={pizza.sauce} />
      </div>
      <div className="d-md-flex d-block mx-3 text-center">
        <div className="orderbox d-flex flex-column justify-content-center align-items-center">
          <div className="pricebox d-flex justify-content-center ms-5">
            {pizza.price} Ft
          </div>
          <div className="buttonbox d-flex flex-column justify-content-center align-items-center ms-3 me-3 mb-3">
            <OrderButton
              id={pizza.name}
              orderOrDont={orderOrDont}
              amountVisibility={amountVisibility}
            />
            <AmountButton
              amount={amount}
              setAmountHandler={setAmount}
              onPlusAmount={plusAmountHandler}
              onMinusAmount={minusAmountHandler}
              orderOrDont={orderOrDont}
              amountVisibility={!amountVisibility}
            />
          </div>
        </div>
        <PizzaImage image={pizza.image} />
      </div>
    </div>
  );
};

export default PizzaListElement;
