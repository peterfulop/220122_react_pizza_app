import React, { useState } from "react";
import Header from "./components/Layout/Header";
import PizzaList from "./components/PizzaList/PizzaList";
import data from "./data/data.js";
import CartProvider from "./store/CartProvider";

import "./App.css";

function App() {
  const [pizzas, setPizzas] = useState(data);
  const [orders, setOrders] = useState([]);

  const setOrderHandler = (
    pizzaId,
    addOrder,
    clearAllById = false,
    amount = 0
  ) => {
    let am = amount > 0 ? amount : 1;

    if (clearAllById) {
      setOrders(orders.filter((o) => o.id !== pizzaId));
      return;
    }
    if (addOrder) {
      var exists = orders.find((x) => x.id === pizzaId);
      if (exists) {
        let selected = orders.find((x) => x.id === pizzaId);
        if (amount > 0) {
          selected.quantity = amount;
        } else {
          selected.quantity += 1;
        }
        setOrders([...orders]);
      } else {
        let selectedItem = pizzas.find((p) => p.id === pizzaId);
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
      let selected = orders.find((x) => x.id === pizzaId);

      if (amount > 0) {
        selected.quantity = amount;
      } else {
        selected.quantity -= 1;
      }
      setOrders([...orders]);
    }
  };

  return (
    <CartProvider>
      <Header orders={orders} />
      <main>
        <PizzaList pizzaList={pizzas} setOrderHandler={setOrderHandler} />
      </main>
    </CartProvider>
  );
}

export default App;
