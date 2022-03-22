import React from "react";
import styles from "./PizzaImage.module.css";

const PizzaImage = (props) => {
  return (
    <img
      className={`${styles.pizza} ${props.className}`}
      src={require(`../../img/${props.image}`)}
      alt={props.name}
      title={props.name}
    />
  );
};

export default PizzaImage;
