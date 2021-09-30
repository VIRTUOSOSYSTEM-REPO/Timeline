import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Chart from "./Timeline/Chart";
import Card from "./Timeline/Card"

function App() {
  return (
    <div className="App">
 <Card />
      <Chart />

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
