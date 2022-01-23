import React from "react";

const ChiliRate = (props) => {
  const rateString = props.rate.split("_")[1].split(".")[0].toUpperCase();
  return (
    <img
      className="chili-rate mx-2"
      src={require(`../../img/${props.rate}`)}
      alt={`Chili rate: ${rateString}!`}
      title={`Chili rate: ${rateString}!`}
    />
  );
};

export default ChiliRate;
