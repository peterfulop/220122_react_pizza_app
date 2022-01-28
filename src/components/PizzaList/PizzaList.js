import React from "react";
import { useState } from "react/cjs/react.development";
import PizzaListElement from "./PizzaListElement";

const PizzaList = ({ data }) => {
  const [orders, setOrders] = useState([]);

  const setOrderCountHandler = (pizzaId, addOrder, clearAllById = false) => {
    if (clearAllById) {
      console.log("clear all byId");
      setOrders(orders.filter((o) => o.id !== pizzaId));
      return;
    }

    if (addOrder) {
      var exists = orders.find((x) => x.id === pizzaId);
      if (exists) {
        let letezo = orders.find((x) => x.id === pizzaId);
        letezo.quantity += 1;
        setOrders([...orders]);
      } else {
        let selectedItem = data.find((p) => p.id === pizzaId);
        let newOrder = {
          id: selectedItem.id,
          name: selectedItem.name,
          price: selectedItem.price,
          image: selectedItem.image,
          quantity: 1,
        };
        setOrders([...orders, newOrder]);
      }
    } else {
      console.log("REMOVE ONE!");
      let letezo = orders.find((x) => x.id === pizzaId);
      letezo.quantity -= 1;
      setOrders([...orders]);
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
