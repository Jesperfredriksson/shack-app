import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";
import CurrentLocation from "./CurrentLocation";

const mapStyles = {
  map: {
    overflow: "hidden",
    position: "absolute",
    height: "300",
    width: "300",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0"
  }
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: true,
    activeMarker: true,
    selectedPlace: true,
    initialCenter: [59.859223, 17.51833654]
  };

  _onChange = ({ initialCenter }) => {
    this.setState({
      initialCenter: initialCenter
    });
  };

  componentWillReceiveProps(initialCenter) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (initialCenter !== this.state.initialCenter) {
      this.setState({ initialCenter });
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const { lat, lng, name } = this.props;

    return (
      <div
        className="maps-conatiner"
        /*style={{
          overflow: "hidden",
          position: "relative",
          height: 500,
          width: 500
        }}*/
      >
        {/*<CurrentLocation centerAroundCurrentLocation google={this.props.google}>*/}
        <Map
          google={this.props.google}
          zoom={10}
          styles={mapStyles}
          initialCenter={{
            lat: 59.859223,
            lng: 17.51833654
          }}
          center={{
            lat,
            lng
          }}
        >
          <Marker title={this.props} position={this.props} onClick="yo">
            <InfoWindow
              marker={this.setState.activeMarker}
              visible={this.setState.showingInfoWindow}
              onClose={this.onClose}
            />
          </Marker>
        </Map>
        {/*</CurrentLocation>*/}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDT2pyVN7KOKqoIhYXuhq479rk0lidHOSk"
})(MapContainer);
