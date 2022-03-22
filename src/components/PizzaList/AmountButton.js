import React from "react";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";

const AmountButton = ({
  amount,
  setAmount,
  onMinusAmount,
  onPlusAmount,
  onDeleteAll,
  onUpdateAmount,
}) => {
  const amountInputHander = (event) => {
    const input = parseInt(event.target.value);
    if (input <= 0 || isNaN(input)) {
      setAmount(1);
      onUpdateAmount(1);

      return;
    }
    if (input > 10) {
      setAmount(10);
      onUpdateAmount(10);

      return;
    }
    setAmount(input);
    onUpdateAmount(input);
  };

  return (
    <form className="amount-input-box">
      <div className="input-group">
        <button
          className="button-minus-amount btn btn-orange d-flex justify-content-center align-items-center"
          type="button"
          onClick={onMinusAmount}
        >
          <FaMinus fontSize={12} />
        </button>
        <input
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
          onClick={onPlusAmount}
        >
          <FaPlus fontSize={12} />
        </button>
      </div>
      <button
        className="button-clear-amount btn btn-sm btn-danger justify-content-center align-items-center ms-2"
        type="button"
        onClick={onDeleteAll}
      >
        <FaTrashAlt fontSize={16} />
      </button>
    </form>
  );
};

export default AmountButton;
