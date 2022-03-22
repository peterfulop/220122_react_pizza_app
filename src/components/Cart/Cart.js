import React, { useContext } from "react";
import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItemActions from "./CartItemActions";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const isItemsInCart = cartCtx.items.length !== 0;

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item, i) => (
        <li
          className="d-sm-flex d-block justify-content-between my-2 align-items-center"
          key={item.id}
        >
          {`${i + 1}. ${item.name} | ${item.amount} db - ${item.price} Ft`}
          <CartItemActions />
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.content}>
        {isItemsInCart ? (
          <Fragment>
            <span className={styles.summary}>Summary</span>
            {cartItems}
            <div className="d-flex justify-content-between">
              <span className={styles.total}>Total Amount:</span>
              <span className={styles.amount}>{cartCtx.totalAmount} Ft</span>
            </div>
          </Fragment>
        ) : (
          <span className={styles.empty}>Your cart is empty! :(</span>
        )}
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-outline-orange" onClick={props.onClose}>
          Close
        </button>
        {isItemsInCart && (
          <button className="btn btn-orange ms-2">Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
