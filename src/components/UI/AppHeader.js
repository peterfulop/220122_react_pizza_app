import React from "react";
import "./AppHeader.css";

const AppHeader = (props) => {
  return (
    <div className="pizza-container__header">
      <h2>{props.header}</h2>
    </div>
  );
};

export default AppHeader;
