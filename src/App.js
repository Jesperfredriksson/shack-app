import React, { Component } from "react";
import "./css/App.css";
import Burgermeny from "./components/Burgermeny";

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
    currentResturant: undefined,
    menuOpen: false
  };

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

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
      <div id="outer-container">
        <Burgermeny
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <main id="page-wrap" />

        <div className="site-container">
          <div className="content-wrapper">
            <div className="title">
              <h2>Var ska vi äta idag?</h2>

              <div className="content">{this.state.currentResturant}</div>
              <button className="random-button" onClick={this.handleClick}>
                Fel ställe? Tryck här tills alla är nöjda
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
