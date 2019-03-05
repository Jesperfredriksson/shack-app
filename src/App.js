import React, { Component } from "react";
import "./css/App.css";

const RESTURANTS = [
  "Phil's",
  "Bastards",
  "Pastastället",
  "Borgen",
  "Icasallad",
  "Max",
  "Villa Anna",
  "Pizzabuffé",
  "American Steakhouse",
  "Foodcourten",
  "OnlinePizza",
  "Jay Fu"
];

class App extends Component {
  state = {
    currentResturant: undefined
  };

  getRandomResturant = () => {
    const randomIndex = Math.floor(Math.random() * RESTURANTS.length);
    return RESTURANTS[randomIndex];
  };

  componentDidMount = () => {
    this.setState({ currentResturant: this.getRandomResturant() });
  };

  handleClick = () => {
    this.setState({ currentResturant: this.getRandomResturant() });
  };

  render() {
    return (
      <div className="site-container">
        <div className="content-wrapper">
          <div className="title">
            <h2>Var ska vi äta idag?</h2>
          </div>
          <div className="content">{this.state.currentResturant}</div>
          <button className="random-button" onClick={this.handleClick}>
            Fel ställe? Tryck här tills alla är nöjda
          </button>
        </div>
      </div>
    );
  }
}

export default App;
