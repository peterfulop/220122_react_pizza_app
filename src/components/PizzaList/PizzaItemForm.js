import React, { useState } from "react";

import styles from "./PizzaItemForm.module.css";

const PizzaItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const inputChangeHander = () => {
    setAmountIsValid(true);
  };

  const submitHander = (event) => {
    event.preventDefault();
    const enteredAmount = Number(event.target.amount.value);

    if (isNaN(enteredAmount) || enteredAmount <= 0 || enteredAmount > 20) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHander}>
      <input
        className={styles["amount-input"]}
        type="number"
        min={1}
        step={1}
        defaultValue={1}
        name="amount"
        onChange={inputChangeHander}
      />
      <button className="btn btn-outline-orange my-md-0" type="sumit">
        Add To Basket!
      </button>
      {!amountIsValid && <p>Please enter a valid amount (1-20)!</p>}
    </form>
  );
};

export default PizzaItemForm;
