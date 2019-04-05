import React from "react";
import ReactDOM from "react-dom";

const mapStyles = {
  map: {
    position: "absolute",
    width: "100%",
    height: "100%"
  }
};

class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);   
    const { lat, lng } = this.props.initialCenter;
    this.state = {
      CurrentLocation: {
        lat: lat,
        lng: lng
      }
    };
  }

  static defaultProps = {
    zoom: 14,
    initialCenter: {
      lat: 1.2884,
      lng: 36.8233
    },
    centerAroundCurrentLocation: false,
    visible: true
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.CurrentLocation !== this.state.CurrentLocation) {
      this.recenterMap();
    }
  };

  recenterMap = () => {
    const map = this.map;
    const current = this.state.CurrentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  };

  componentDidMount = () => {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          this.setState({
            CurrentLocation: {
              lat: coords.latitude,
              lng: coords.longitudde
            }
          });
        });
      }
    }
    this.loadMap();
  };

  loadMap = () => {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let { zoom } = this.props;
      const { lat, lng } = this.state.CurrentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );
      this.map = new maps.Map(node, mapConfig);
    }
  };

  renderChildren = () => {
    const { children } = this.props;
    if (!children) return;

    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.google,
        mapCenter: this.state.cloneElement
      });
    });
  };

  render() {
    const style = Object.assign({}, mapStyles.map);
    return (
      <div>
        <div style={style} ref="map">
          Loading map...
        </div>
        {this.renderChildren}
      </div>
    );
  }
}

export default CurrentLocation;
