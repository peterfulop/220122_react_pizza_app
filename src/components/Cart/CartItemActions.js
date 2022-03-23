import React from "react";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import styles from "./CartItemsActions.module.css";

const CartItemActions = (props) => {
  return (
    <div className={styles.actions}>
      <button
        className="button-minus-amount btn btn-orange d-flex justify-content-center align-items-center"
        type="button"
        onClick={props.onReduce}
      >
        <FaMinus fontSize={12} />
      </button>
      <span className={styles["amount-input"]}>{props.amount}</span>
      <button
        className="button-plus-amount btn btn-orange d-flex justify-content-center align-items-center"
        type="button"
        onClick={props.onAdd}
      >
        <FaPlus fontSize={12} />
      </button>
      <button
        className="button-clear-amount btn btn-danger justify-content-center align-items-center ms-2"
        type="button"
        onClick={props.onDelete}
      >
        <FaTrashAlt fontSize={16} />
      </button>
    </div>
  );
};

export default CartItemActions;
