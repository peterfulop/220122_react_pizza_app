import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import logo from "../../../img/pizza_box.svg";
import styles from "./HeaderCartButton.module.css";

const OrderBasket = () => {
  const cartCtx = useContext(CartContext);

  let numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const orderCounterBox = numberOfCartItems >= 0 && (
    <div className={styles["pizza-basket-count"]}>{numberOfCartItems}</div>
  );

  return (
    <button className={styles["order-basket"]}>
      <div className="d-flex flex-column align-items-center mx-4">
        <img className={styles["pizza-box"]} src={logo} alt="basket-icon" />
        {orderCounterBox}
      </div>
    </button>
  );
};

export default OrderBasket;
