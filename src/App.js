import React, { Component } from "react";

import "normalize.css";
import "./css/App.css";
import Gomaps from "./components/Maps/Gomaps";

class App extends Component {
  state = {
    currentResturant: undefined,
    restaurants: [
      { name: "Phil's", lng: 59.86278, lat: 17.6444483 },
      { name: "Bastards", lat: 59.8584475, lng: 17.6393865 },
      { name: "Pastastället", lat: 12.23, lng: 123.333 },
      { name: "Borgen", lat: 59.8605487, lng: 17.6294423 },
      { name: "Icasallad", lat: 59.8601384, lng: 17.6349784 },
      { name: "Max", lat: 59.8589042, lng: 17.6365515 },
      { name: "Villa Anna", lat: 59.8568521, lng: 17.6290886 },
      { name: "Pizzabuffé", lat: 59.8617816, lng: 17.6410673 },
      { name: "American Steakhouse", lat: 59.883306, lng: 17.6854217 },
      { name: "Foodcourten", lat: 59.8772325, lng: 17.6722102 },
      { name: "OnlinePizza", lat: 59.8332051, lng: 17.5183654 },
      { name: "Jay Fu", lat: 59.8592923, lng: 17.6314386 },
      { name: "Egon", lat: 59.8582046, lng: 17.6383882 },
      { name: "Texas", lat: 59.8582046, lng: 17.6383882 },
      { name: "Pinchos", lat: 59.8582046, lng: 17.6383882 },
      { name: "Domtrappskällaren", lat: 59.8582046, lng: 17.6383882 },
      { name: "Rådhuset", lat: 59.8582046, lng: 17.6383882 },
      { name: "Miss Von", lat: 59.8582046, lng: 17.6383882 },
      { name: "Stationen", lat: 59.8582046, lng: 17.6383882 }
    ]
  };

  getRandomResturant = () => {
    const randomIndex = Math.floor(
      Math.random() * this.state.restaurants.length
    );
    return this.state.restaurants[randomIndex];
  };

  componentDidMount = () => {
    this.setState({ currentResturant: this.getRandomResturant() });
  };

  handleClick = () => {
    this.setState({ currentResturant: this.getRandomResturant() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const value = e.target.restaurant.value;
    this.setState({
      restaurants: [...this.state.restaurants, value]
    });
    document.getElementById("restaurantForm").reset();
  };

  render() {
    const { currentResturant } = this.state;

    if (!currentResturant) return null;

    return (
      <React.Fragment>
        <div className="site-container">
          <div className="content-wrapper">
            <div className="title">
              <h2>Var ska vi äta idag?</h2>
            </div>
            <div className="content">{currentResturant.name}</div>
            <button className="random-button" onClick={this.handleClick}>
              Fel ställe? Tryck här tills alla är nöjda
            </button>
            {/*<form onSubmit={this.handleSubmit} id="restaurantForm">
              <input input="text" placeholder="" name="restaurant" />
              <input type="submit" value="Lägg till ny" />
            </form>*/}
          </div>
        </div>
        <Gomaps
          lat={currentResturant.lat}
          lng={currentResturant.lng}
          name={currentResturant.name}
        />
      </React.Fragment>
    );
  }
}

export default App;
