import React from "react";
import AppHeader from "./components/UI/AppHeader";
import PizzaList from "./components/PizzaList/PizzaList";
import data from "./data/data.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AppHeader header="React Pizza App" />
      <PizzaList data={data} />
    </div>
  );
}

export default App;
