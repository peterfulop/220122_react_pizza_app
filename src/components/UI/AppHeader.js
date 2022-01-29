import React from "react";
import OrderBasket from "../OrderBasket/OrderBasket";
import "./AppHeader.css";

const AppHeader = (props) => {
  return (
    <div className="app__header">
      <div style={{ width: "98px" }} />
      <div className="header__title">
        <h2>{props.header}</h2>
      </div>
      <OrderBasket orderCount={props.orderCount} />
    </div>
  );
};

export default AppHeader;
