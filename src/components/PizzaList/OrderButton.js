import React from "react";
const OrderButton = (props) => {
  const myClass = props.class ? props.class : "";

  const addToCart = (event) => {
    const setAmountBox = event.target.parentElement.lastChild;
    const addCartBtn = event.target;
    const amountInput = setAmountBox.querySelector("input");

    setAmountBox.classList.remove("d-none");
    addCartBtn.classList.add("d-none");
    amountInput.value = 1;
  };

  return (
    <button
      onClick={addToCart}
      className={`btn btn-outline-orange my-3 my-md-0 ${myClass}`}
      style={{ width: "170px" }}
      id={props.name}
    >
      Rendelek!
    </button>
  );
};

export default OrderButton;
