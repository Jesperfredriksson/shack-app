import React, { Component } from "react";
import "./App.css";
import Foodplaces from "./Foodplaces";

class App extends Component {
  render() {
    return (
      <div className="site-container">
        <div className="title">
          <h2>Var ska vi äta idag?</h2>
        </div>
        <div className="content">
          <Foodplaces />
        </div>
      </div>
    );
  }
}

export default App;
