import React from "react";
import logo from "../../img/pizza_box.svg";
import "./OrderBasket.css";

const OrderBasket = (props) => {
  return (
    <div className="order-basket">
      <div className="d-flex flex-column align-items-center mx-4">
        <img className="pizza-box" src={logo} alt="basket-icon" />
        <input
          readOnly={true}
          type="number"
          className="pizza-basket-count"
          value={props.orderCount}
        />
      </div>
    </div>
  );
};

export default OrderBasket;
