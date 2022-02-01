import React, { useState } from "react";
import AppHeader from "./components/UI/AppHeader";
import PizzaList from "./components/PizzaList/PizzaList";
import data from "./data/data.js";

import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);
  const [orderCount, setOrderCount] = useState(0);

  const orderCountHandler = () => {
    let sum = 0;
    orders.forEach((x) => (sum += x.quantity));
    setOrderCount(sum);
  };

  const setOrderHandler = (pizzaId, addOrder, clearAllById = false) => {
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
      let letezo = orders.find((x) => x.id === pizzaId);
      letezo.quantity -= 1;
      setOrders([...orders]);
    }

    orderCountHandler();
  };

  const testMethod = (inputValue) => {
    console.log(inputValue);
  };

  return (
    <div className="App">
      <AppHeader header="React Pizza App" orderCount={orderCount} />
      <PizzaList data={data} onUpdateOrder={testMethod} />
    </div>
  );
}

export default App;
