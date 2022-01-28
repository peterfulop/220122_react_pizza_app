import React from "react";
import { useState } from "react/cjs/react.development";
import PizzaListElement from "./PizzaListElement";

const PizzaList = ({ data }) => {
  const [orders, setOrders] = useState([]);

  const setOrderCountHandler = (pizzaId, addOrder, clearAllById = false) => {
    if (clearAllById) {
      setOrders(orders.filter((o) => o.id !== pizzaId));
      return;
    }

    if (addOrder) {
      console.log("ADD NEW!");
      setOrders([...orders, data.find((p) => p.id === pizzaId)]);
      console.log(orders);
    } else {
      console.log("REMOVE ONE!");
      const index = orders.findIndex((d) => d.id === pizzaId);
      setOrders(orders.splice(index, 1));
      console.log(orders);
    }
  };

  return (
    <div className="pizza-list">
      {data.map((x) => {
        return (
          <PizzaListElement
            pizza={x}
            key={x.id}
            onSetOrders={setOrderCountHandler}
          />
        );
      })}
    </div>
  );
};

export default PizzaList;
