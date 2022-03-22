import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          {item.name} | {item.amount} db - {item.price} Ft
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      <h4>Summary</h4>
      {cartItems}
      <div>
        <span className={styles.total}>Total Amount</span>
        <span>
          {cartCtx.items.length} - {cartCtx.totalAmount} Ft
        </span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={styles["button"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
