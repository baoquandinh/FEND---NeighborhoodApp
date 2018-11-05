import React, { Component } from 'react';
import Map from './components/Map'
import VenueListContainer from './components/VenueListContainer';
import './css/main.css'
class App extends Component {
  selectedVenue = null
  state={
    venues: [],
    venueType: '',
    markers: [],
  }
  componentDidMount(){
    this.getVenues()
  }
  // Retreives the list of recommeneded food venues near default location
  getVenues = () => {
    fetch('https://api.foursquare.com/v2/venues/explore?client_id=P51OPZBHXUNV55SMH1K3G0FI5TAQAI3I0A5UAPUK4UETVLLD&client_secret=1MDR0MSHV1L4T01OHEXYEE1CQ2XLN5M2Y4LT42H2EGPQETLT&v=20180323&limit=15&ll=37.7007467,-121.8934768&query=food')
    .then(res => res.json())
    .then(data => {
      let venues = data.response.groups[0].items.map(item => item.venue)
      venues.forEach(venue => {
        venue.isOpen = false
        venue.animation = 2
      });
      this.setState({venues: venues})
    })
    .catch(err => {
        console.log(err)
    });
  }
  // Filters the venue
  onVenueTypeUpdate = (prop) => {
    if(this.selectedVenue !== null) {
      this.selectedVenue.isOpen = false
      this.selectedVenue.animation = 0
    }
    this.selectedVenue = null
    prop === "all" ? this.setState({venueType: ''}) : this.setState({venueType: prop})
  }
  // Shows the marker associated with this item
  onItemClick = (venue) => {
    this.onMarkerClick(venue)
  }
  // Set infowindow to appear when marker is clicked
  onMarkerClick = (venue) => {
    if(this.selectedVenue !== null && this.selectedVenue !== venue) {
      this.selectedVenue.isOpen = false
      this.selectedVenue.animation = 0
      console.log(this.selectedVenue)
    }
    this.selectedVenue = venue
    venue.isOpen = !venue.isOpen 
    venue.animation = 1
    this.setState({venues: Object.assign(this.state.venues, venue)})
  }

  render() {
    return(
      <div id="app" className="container">
        <div className="venue-list-container">
          <VenueListContainer 
          venue={this.state.venues} 
          venueType={this.state.venueType} 
          onVenueTypeUpdate={this.onVenueTypeUpdate} 
          onItemClick={this.onItemClick}
          />
        </div>
        <div className="map">
         <Map 
         venues={this.state.venues}
         venueType={this.state.venueType} 
         onMarkerClick={this.onMarkerClick} />
        </div>
      </div>
    )
  }
}
export default App
