import React from "react";
import styles from "./Toppings.module.css";

const Sauce = (props) => {
  return (
    <img
      className={styles.sauce}
      src={require(`../../img/${props.sauce}`)}
      alt="sauce"
    />
  );
};

const Toppings = (props) => {
  return (
    <ul className={`${styles.toppings} d-md-flex d-block flex-wrap`}>
      <li className="d-flex justify-content-center mb-3 m-md-1 p-0 bg-transparent">
        <Sauce sauce={props.sauce} />
      </li>
      {props.toppings.map((topping) => {
        return (
          <li className="m-1 d-flex justify-content-center" key={Math.random()}>
            {topping}
          </li>
        );
      })}
    </ul>
  );
};

export default Toppings;
