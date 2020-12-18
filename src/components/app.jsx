import React, { Component } from 'react';
import '../../assets/stylesheets/application.scss';
import GoogleMapReact from 'google-map-react';
import Flat from './flat';
import Map from './map';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount() {
    fetch(url)
      .then(reponse => response.json())
      .then((data) => {
        this.setState({
         flats: data
       });
      })
  }

  render() {

  const center = {
    lat: 48.8566,
    lng: 23.522
  }
    const flat = {
      name: "Charm at the Steps of the Sacre Coeur/Montmartre",
      imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
      price: 164,
      priceCurrency: "EUR",
      lat: 48.884211,
      lng: 2.34689
    };
    return (
      <div className="app">
        <div className="main">
          <div className="search"></div>
          <div className="flats"></div>
            <Flat flat={flat} />
            {this.state.flats.map(function(flat) {
              return <Flat flat={flat} />
            })}

        </div>
        <div className="map">
          <GoogleMapReact
              center={center}
              zoom={11}
          >
          </GoogleMapReact>
        </div>
        </div>
    );
  }
}

export default App;
