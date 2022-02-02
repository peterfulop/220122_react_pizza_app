import React from "react";
import logo from "../../img/pizza_box.svg";
import "./OrderBasket.css";

const OrderBasket = ({ orders }) => {
  const getOrdersCount = () => {
    let sum = 0;
    orders.forEach((x) => (sum += x.quantity));
    return sum;
  };

  const orderCount = getOrdersCount();
  const orderCounterBox = orderCount > 0 && (
    <input
      readOnly={true}
      type="number"
      className="pizza-basket-count"
      value={orderCount}
    />
  );

  return (
    <div className="order-basket">
      <div className="d-flex flex-column align-items-center mx-4">
        <img className="pizza-box" src={logo} alt="basket-icon" />
        {orderCounterBox}
      </div>
    </div>
  );
};

export default OrderBasket;
