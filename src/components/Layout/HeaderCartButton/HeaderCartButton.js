import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../../store/cart-context";
import logo from "../../../img/pizza_box.svg";
import styles from "./HeaderCartButton.module.css";

const OrderBasket = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);

  const { items } = cartCtx;

  let numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const orderCounterBox = numberOfCartItems >= 0 && (
    <div className={styles["pizza-basket-count"]}>{numberOfCartItems}</div>
  );

  const btnClasses = `${styles.button} ${btnIsHighLighted ? styles.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <div className="d-flex flex-column align-items-center mx-4">
        <img className={styles["pizza-box"]} src={logo} alt="basket-icon" />
        {orderCounterBox}
      </div>
    </button>
  );
};

export default OrderBasket;
