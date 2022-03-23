import React from "react";
import styles from "./CartItem.module.css";
import CartItemActions from "./CartItemActions";

const CartItem = (props) => {
  const priceTag = `${props.price} Ft`;
  return (
    <li className={styles["cart-item"]}>
      <div>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.price}>{priceTag}</span>
      </div>
      <CartItemActions
        amount={props.amount}
        onAdd={props.onAdd}
        onReduce={props.onReduce}
        onDelete={props.onDelete}
      />
    </li>
  );
};

export default CartItem;
