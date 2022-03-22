import React from "react";

const Sauce = (props) => {
  return (
    <img
      className={props.className}
      src={require(`../../img/${props.sauce}`)}
      alt="sauce"
    />
  );
};

export default Sauce;
