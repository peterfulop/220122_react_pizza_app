import React from "react";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";

const AmountButton = (props) => {
  const amountInputHander = (event) => {
    const input = parseInt(event.target.value);
    if (input <= 0 || isNaN(input)) {
      props.setAmount(1);
      props.onUpdateOrder(1);
      return;
    }
    if (input > 10) {
      props.setAmount(10);
      props.onUpdateOrder(10);
      return;
    }
    props.setAmount(input);
    props.onUpdateOrder(input);
  };

  return (
    <div className="amount-input-box">
      <div className="input-group">
        <button
          className="button-minus-amount btn btn-orange d-flex justify-content-center align-items-center"
          type="button"
          onClick={props.onMinusAmount}
        >
          <FaMinus fontSize={12} />
        </button>
        <input
          type="number"
          min="1"
          max="10"
          value={props.amount}
          onChange={amountInputHander}
          className="input-amount form-control btn btn-warning text-dark"
        />
        <button
          className="button-plus-amount btn btn-orange d-flex justify-content-center align-items-center"
          type="button"
          onClick={props.onPlusAmount}
        >
          <FaPlus fontSize={12} />
        </button>
      </div>
      <button
        className="button-clear-amount btn btn-sm btn-danger justify-content-center align-items-center ms-2"
        type="button"
        onClick={props.onDeleteAll}
      >
        <FaTrashAlt fontSize={16} />
      </button>
    </div>
  );
};

export default AmountButton;
