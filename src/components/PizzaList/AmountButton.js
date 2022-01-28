import React from "react";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";

const AmountButton = ({
  amountVisibility,
  amount,
  setAmountHandler,
  plusAmountHandler,
  minusAmountHandler,
  orderOrDont,
}) => {
  const amountInputHander = (event) => {
    const input = parseInt(event.target.value);
    if (input <= 0) {
      setAmountHandler(1);
      return;
    }
    if (input > 10) {
      setAmountHandler(10);
      return;
    }
    setAmountHandler(input);
  };

  return (
    <div className="amount-input-box" hidden={amountVisibility}>
      <div className="input-group">
        <button
          className="button-minus-amount btn btn-orange d-flex justify-content-center align-items-center"
          type="button"
          onClick={minusAmountHandler}
        >
          <FaMinus fontSize={12} />
        </button>
        <input
          readOnly={true}
          type="number"
          min="1"
          max="10"
          value={amount}
          onChange={amountInputHander}
          className="input-amount form-control btn btn-warning text-dark"
        />
        <button
          className="button-plus-amount btn btn-orange d-flex justify-content-center align-items-center"
          type="button"
          onClick={plusAmountHandler}
        >
          <FaPlus fontSize={12} />
        </button>
      </div>
      <button
        className="button-clear-amount btn btn-sm btn-danger justify-content-center align-items-center ms-2"
        type="button"
        onClick={() => {
          orderOrDont(false);
        }}
      >
        <FaTrashAlt fontSize={16} />
      </button>
    </div>
  );
};

export default AmountButton;
