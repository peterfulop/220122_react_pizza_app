import React from "react";
import styles from "./ChiliRate.module.css";

const chiliData = {
  0: "",
  1: "chili_hot.svg",
  2: "chili_mild.svg",
  3: "chili_spicy.svg",
};

const ChiliRate = (props) => {
  const rateString = chiliData[props.rate]
    .split("_")[1]
    .split(".")[0]
    .toUpperCase();
  const selectedIcon = chiliData[props.rate];

  return (
    <img
      className={styles["chili"]}
      src={require(`../../img/${selectedIcon}`)}
      alt={`Chili rate: ${rateString}!`}
      title={`Chili rate: ${rateString}!`}
    />
  );
};

export default ChiliRate;
