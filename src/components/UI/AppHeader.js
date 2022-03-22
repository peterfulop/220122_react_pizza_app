import React from "react";
import OrderBasket from "../OrderBasket/OrderBasket";
import "./AppHeader.css";

const AppHeader = (props) => {
  return (
    <div className="app__header">
      <div style={{ width: "98px" }} />
      <div className="header__title">
        <h2>React Pizza App</h2>
      </div>
      <OrderBasket orders={props.orders} />
    </div>
  );
};

export default AppHeader;
