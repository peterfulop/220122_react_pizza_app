import React from "react";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";

const AmountButton = (props) => {
  const removeFromBasket = (event) => {
    const buttonBox = event.target.parentElement.parentElement;
    const addCartBtn = buttonBox.firstChild;
    const setAmountBox = buttonBox.lastChild;

    setAmountBox.classList.add("d-none");
    addCartBtn.classList.remove("d-none");
  };

  const setAmount = (event) => {
    const btn = event.target;
    let amountInput = event.target.parentElement.querySelector("input");
    if (btn.id.includes("plus")) {
      if (amountInput.value === amountInput.max) return;
      amountInput.value = parseInt(amountInput.value) + 1;
    } else {
      if (amountInput.value === amountInput.min) return;
      amountInput.value = parseInt(amountInput.value) - 1;
    }
  };

  return (
    <div className={`d-flex ${props.class}`} style={{ width: "170px" }}>
      <div className="input-group">
        <button
          className="btn btn-orange d-flex justify-content-center align-items-center"
          type="button"
          id="button-minus-amount"
          style={{ width: "40px" }}
          onClick={setAmount}
        >
          <FaMinus fontSize={12} />
        </button>
        <input
          type="number"
          min="1"
          max="10"
          className="form-control btn btn-warning text-dark"
        />
        <button
          className="btn btn-orange d-flex justify-content-center align-items-center"
          type="button"
          id="button-plus-amount"
          style={{ width: "40px" }}
          onClick={setAmount}
        >
          <FaPlus fontSize={12} />
        </button>
      </div>
      <button
        className="btn btn-sm btn-danger d-flex justify-content-center align-items-center ms-2"
        type="button"
        id="button-addon2"
        style={{ width: "40px" }}
        onClick={removeFromBasket}
      >
        <FaTrashAlt fontSize={16} />
      </button>
    </div>
  );
};

export default AmountButton;
