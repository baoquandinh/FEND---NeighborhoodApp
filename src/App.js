import React, { Component } from 'react';
import VenueListContainer from './components/VenueListContainer';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './css/main.css'

class App extends Component {
  state = {
    myVenues: []
  }
  componentWillMount() {
    this.getAllVenues()
  }

  getAllVenues() {
    fetch('https://api.foursquare.com/v2/venues/explore?client_id=P51OPZBHXUNV55SMH1K3G0FI5TAQAI3I0A5UAPUK4UETVLLD&client_secret=1MDR0MSHV1L4T01OHEXYEE1CQ2XLN5M2Y4LT42H2EGPQETLT&v=20180323&limit=16&ll=37.7007467,-121.8934768&query=food')
    .then(res => res.json())
    .then(data => {
      this.setState({myVenues: data.response.groups[0].items})
    })
    .catch(err => {
        console.log(err)
    });
  }

  render() {
    return(
      <div id="app">
        {/* Renders the search container with a list of default locations */}
        <VenueListContainer venue={this.state.myVenues} />
        {/* Renders the map component */}
        <Map id="map"
        google={this.props.google}
        zoom={14}/>
      </div>
      
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBHEgpD4hABDICXccQYltIfR_FpB1Xg0r8'
})(App);
