import React from "react";

const Sauce = (props) => {
  return (
    <img
      className="sauce-icon"
      src={require(`../../img/${props.sauce}`)}
      alt="sauce"
    />
  );
};

export default Sauce;
