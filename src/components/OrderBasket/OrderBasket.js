import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import logo from "../../img/pizza_box.svg";
import "./OrderBasket.css";

const OrderBasket = ({ orders }) => {
  const cartCtx = useContext(CartContext);

  let numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const orderCounterBox = numberOfCartItems > -1 && (
    <div className="pizza-basket-count">{numberOfCartItems}</div>
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
