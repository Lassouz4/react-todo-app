import React from "react";
import Header from "../header/";
import Action from "../action/";
import AddOption from "../addoption/";
import "./style.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Action />
      <AddOption />
    </div>
  );
};

export default App;
