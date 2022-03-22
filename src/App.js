import React, { useState } from "react";
import Header from "./components/Layout/Header";
import PizzaList from "./components/PizzaList/PizzaList";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

import { pizzas } from "./data/pizza";
import "./styles/App.css";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <CartProvider>
      {cartIsVisible && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <PizzaList pizzaList={pizzas} />
      </main>
    </CartProvider>
  );
}

export default App;
