import React from "react";
import "./PizzaImage.css";
const PizzaImage = (props) => {
  return (
    <img
      className={`pizza-icon mb-3 mb-md-0 ${props.className}`}
      src={require(`../../img/${props.image}`)}
      alt={props.name}
      title={props.name}
    />
  );
};

export default PizzaImage;
