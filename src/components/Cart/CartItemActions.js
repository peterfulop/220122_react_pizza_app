import React from "react";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import styles from "./CartItemsActions.module.css";

const AmountButton = (props) => {
  return (
    <div className={`${styles["amount-form"]} `}>
      <div className="input-group">
        <button
          className="button-minus-amount btn btn-orange d-flex justify-content-center align-items-center"
          type="button"
        >
          <FaMinus fontSize={12} />
        </button>
        <input
          type="number"
          min="1"
          defaultValue={1}
          value={props.value}
          className={`${styles["amount-input"]} form-control btn btn-warning text-dark`}
        />
        <button
          className="button-plus-amount btn btn-orange d-flex justify-content-center align-items-center"
          type="button"
        >
          <FaPlus fontSize={12} />
        </button>
      </div>
      <button
        className="button-clear-amount btn btn-sm btn-danger justify-content-center align-items-center ms-2"
        type="button"
      >
        <FaTrashAlt fontSize={16} />
      </button>
    </div>
  );
};

export default AmountButton;
