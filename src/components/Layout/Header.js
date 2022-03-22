import React from "react";
import OrderBasket from "./HeaderCartButton/HeaderCartButton";
import styles from "./Header.modules.css";

const AppHeader = (props) => {
  return (
    <header className={styles.header}>
      <h2>React Pizza App</h2>
      <OrderBasket orders={props.orders} />
    </header>
  );
};

export default AppHeader;
