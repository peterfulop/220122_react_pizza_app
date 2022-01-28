import React from "react";
import AppHeader from "./components/UI/AppHeader";
import PizzaList from "./components/PizzaList/PizzaList";
import data from "./data/data.js";

import "./App.css";

const convertData = () => {
  return data.map((d) => {
    return { ...d, id: `${Math.random()}`.substring(2) };
  });
};

function App() {
  return (
    <div className="App">
      <AppHeader header="React Pizza App" />
      <PizzaList data={convertData()} />
    </div>
  );
}

export default App;
