import React from "react";
const OrderButton = ({ id, orderOrDont, amountVisibility }) => {
  console.log("render OrderBtn");
  return (
    <button
      hidden={amountVisibility}
      data-id={id}
      onClick={() => {
        orderOrDont(true);
      }}
      className="btn btn-outline-orange my-md-0"
      style={{ width: "170px" }}
    >
      Rendelek!
    </button>
  );
};

export default OrderButton;
