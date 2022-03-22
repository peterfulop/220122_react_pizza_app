import React from "react";
import Header from "./components/Layout/Header";
import Pizzas from "./components/Pizzas/Pizzas";
import CartProvider from "./store/CartProvider";

import { pizzas } from "./data/pizza";
import "./styles/App.css";

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Pizzas pizzaList={pizzas} />
      </main>
    </CartProvider>
  );
}

export default App;
