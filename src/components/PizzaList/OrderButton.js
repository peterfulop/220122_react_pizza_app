import React from "react";
const OrderButton = ({ orderOrDont, amountVisibility }) => {
  console.log("render OrderBtn");
  return (
    <div className="buttonbox d-flex flex-column justify-content-center align-items-center ms-3 me-3 mb-3">
      <button
        hidden={amountVisibility}
        onClick={() => {
          orderOrDont(true);
        }}
        className="btn btn-outline-orange my-md-0"
        style={{ width: "170px" }}
      >
        Rendelek!
      </button>
    </div>
  );
};

export default OrderButton;
