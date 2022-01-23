import React from "react";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";

const AmountButton = () => {
  return (
    <div className="d-flex mb-3" style={{ width: "200px" }}>
      <div className="input-group">
        <button
          className="btn btn-orange"
          type="button"
          id="button-addon1"
          style={{ width: "40px" }}
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
          className="btn btn-orange"
          type="button"
          id="button-addon2"
          style={{ width: "40px" }}
        >
          <FaPlus fontSize={12} />
        </button>
      </div>
      <button
        className="btn btn-sm btn-danger ms-2"
        type="button"
        id="button-addon2"
        style={{ width: "40px" }}
      >
        <FaTrashAlt fontSize={16} />
      </button>
    </div>
  );
};

export default AmountButton;
