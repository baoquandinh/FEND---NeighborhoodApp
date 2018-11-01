import React, { Component } from 'react';
import Map from './components/Map'
import VenueListContainer from './components/VenueListContainer';
import './css/main.css'
class App extends Component {
  state={
    myVenues: [],
    venueType: '',
    markers: [],
  }
  componentDidMount(){
    this.getVenue()
  }
  // Retreives the list of recommeneded food venues near default location
  getVenue = () => {
    fetch('https://api.foursquare.com/v2/venues/explore?client_id=P51OPZBHXUNV55SMH1K3G0FI5TAQAI3I0A5UAPUK4UETVLLD&client_secret=1MDR0MSHV1L4T01OHEXYEE1CQ2XLN5M2Y4LT42H2EGPQETLT&v=20180323&limit=15&ll=37.7007467,-121.8934768&query=food')
    .then(res => res.json())
    .then(data => {
      let markers = data.response.groups[0].items.map(item => {
        return {
          id: item.venue.id, 
          lat: item.venue.location.lat, 
          lng: item.venue.location.lng, 
          isOpen: false,  // InfoWindow closed by default
          isVisible: true} //
        })
        this.setState({myVenues: data.response.groups[0].items, markers: markers})
    })
    .catch(err => {
        console.log(err)
    });
  }
  // Sets the venue type to use for filtering
  onVenueTypeUpdate = (prop) => {
    prop === "all" ? this.setState({venueType: ''}) : this.setState({venueType: prop})
    this.setState({isVisible: false, activeMarker: null})
  }
  onItemClick = (e) => {
    this.state.markers.filter((marker) => marker.id === e.venue.id).map(marker => console.log(marker))
    console.log(e.venue)
  }
  onMarkerClick = (marker) => {
    console.log(marker)
    marker.isOpen = true
    this.setState({markers: Object.assign(this.state.markers, marker)})
  }

  render() {
    return(
      <div id="app">
        <div className="venue-list-container">
          <VenueListContainer 
          venue={this.state.myVenues} 
          venueType={this.state.venueType} 
          onVenueTypeUpdate={this.onVenueTypeUpdate} 
          onItemClick={this.onItemClick}
          />
        </div>
        <div className="map">
         <Map 
         venue={this.state.myVenues} 
         venueType={this.state.venueType} 
         markers={this.state.markers} 
         onMarkerClick={this.onMarkerClick} />
        </div>
      </div>
    )
  }
}
export default App
