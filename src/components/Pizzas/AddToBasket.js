import React, { useState } from "react";
import AmountButton from "./AmountButton";

const AddToBasket = ({ pizza, setOrderHandler }) => {
  const [amount, setAmount] = useState(1);
  const [editAmount, startEditAmount] = useState(false);

  const plusAmountHandler = () => {
    if (amount === 10) return;
    setAmount((prevAmount) => {
      setOrderHandler(pizza.id, true);
      return prevAmount + 1;
    });
  };

  const minusAmountHandler = () => {
    if (amount === 1) return;
    setAmount((prevAmount) => {
      setOrderHandler(pizza.id, false);
      return prevAmount - 1;
    });
  };

  const startEditAmountHandler = () => {
    setAmount(1);
    startEditAmount(true);
    setOrderHandler(pizza.id, true);
  };

  const stopEditAmountHandler = () => {
    setAmount(0);
    startEditAmount(false);
    setOrderHandler(pizza.id, false, true);
  };

  const onUpdateAmount = (amount) => {
    setOrderHandler(pizza.id, true, false, amount);
  };

  return (
    <div className="buttonbox d-flex flex-column justify-content-center align-items-center ms-3 me-3 mb-3">
      {editAmount ? (
        <AmountButton
          onDeleteAll={stopEditAmountHandler}
          onPlusAmount={plusAmountHandler}
          onMinusAmount={minusAmountHandler}
          amount={amount}
          setAmount={setAmount}
          onUpdateAmount={onUpdateAmount}
        />
      ) : (
        <button
          onClick={startEditAmountHandler}
          className="btn btn-outline-orange my-md-0"
          style={{ width: "170px" }}
        >
          Rendelek!
        </button>
      )}
    </div>
  );
};

export default AddToBasket;
