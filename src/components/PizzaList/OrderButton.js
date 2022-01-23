import React from "react";
const OrderButton = (props) => {
  return (
    <button
      className="btn btn-outline-orange my-3 my-md-0 d-none"
      style={{ width: "160px" }}
      id={props.name}
    >
      Rendelek!
    </button>
  );
};

export default OrderButton;
