import React, { useState } from "react";
import ChiliRate from "./ChiliRate";
import PizzaImage from "./PizzaImage";
import Toppings from "./Toppings";
import OrderButton from "./OrderButton";
import AmountButton from "./AmountButton";
import "./PizzaListElement.css";

const PizzaListElement = ({ pizza }) => {
  const [amount, setAmount] = useState(0);
  const [amountVisibility, setAmountVisibility] = useState(false);

  const [orders, setOrders] = useState([]);

  const setUserOrders = (add) => {
    if (add) {
      setOrders([
        ...orders,
        { id: pizza.id, name: pizza.name, price: pizza.price },
      ]);
    } else {
      setOrders(
        orders.splice(
          orders.findLastIndex((x) => x.id === pizza.id),
          1
        )
      );
    }
  };

  const orderOrDont = (order) => {
    if (order) {
      setAmount(1);
      setUserOrders(order);
    } else {
      setAmount(0);
      setOrders(
        orders.filter((x) => {
          return x.id !== pizza.id;
        })
      );
    }
    setAmountVisibility(order);
  };

  const plusAmount = () => {
    if (amount === 10) return;
    setAmount(parseInt(amount) + 1);
    setUserOrders(true);
  };

  const minusAmount = () => {
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
              plusAmountHandler={plusAmount}
              minusAmountHandler={minusAmount}
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
