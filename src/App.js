import React, { Component } from 'react';
import Map from './components/Map'
import VenueListContainer from './components/VenueListContainer';
import Container from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Alert from 'react-bootstrap/lib/Alert'

import './css/main.css'
class App extends Component {
  selectedVenue = null
  state={
    venues: [],
    venueType: '',
    markers: [],
    showErrors: false
  }
  componentDidMount(){
    this.getVenues()
  }
  // Checks and handles errors from fetch response
  handleErrors = (response) => {
    if (!response.ok) {
      this.setState({showErrors: true})
      throw Error(response.statusText)
    }
    return response
  }
  // Retreives the list of recommeneded food venues near default location
  getVenues = () => {
    fetch('https://api.foursquare.com/v2/venues/explore?client_id=P51OPZBHXUNV55SMH1K3G0FI5TAQAI3I0A5UAPUK4UETVLLD&client_secret=1MDR0MSHV1L4T01OHEXYEE1CQ2XLN5M2Y4LT42H2EGPQETLT&v=20180323&limit=15&ll=37.7007467,-121.8934768&query=food')
    .then(this.handleErrors)
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
    if(this.selectedVenue === venue && this.selectedVenue.animation === 1) {
      venue.animation = 0
    } else {
      venue.animation = 1
    }
    this.setState({venues: Object.assign(this.state.venues, venue)})
  }

  render() {
    return(
      <div id="app">
      {/* Alert on fetch response error */}
        <div className="app-alert">
        <Alert show={this.state.showErrors} dismissible variant="danger" className="app-error-alert alert-hide" aria-label="error alert close" onClose={this.handleErrors}>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
           <p>Yikes! It seems like the venues aren't loading correctly. Please try again by refreshing the page now, or in a couple of minutes.</p>
        </Alert>
        </div>
        <Container fluid={true}>
          <Row className="app-row">
            <Col className="map" lg={9}>
              <Map 
              venues={this.state.venues}
              venueType={this.state.venueType} 
              onMarkerClick={this.onMarkerClick} />
            </Col>
            <Col className="venue-list-container" lg={3}>
                <VenueListContainer 
                venue={this.state.venues} 
                venueType={this.state.venueType} 
                onVenueTypeUpdate={this.onVenueTypeUpdate} 
                onItemClick={this.onItemClick}
                />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default App
