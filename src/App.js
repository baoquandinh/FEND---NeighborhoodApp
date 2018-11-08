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
  // Handles error when fetch has no correct response
  handleErrors = () => {
    console.log("Please refresh the page!")
  }
  // Retreives the list of recommeneded food venues near default location using FourSquare API
  getVenues = () => {
    fetch('https://api.foursquare.com/v2/venues/explore?client_id=P51OPZBHXUNV55SMH1K3G0FI5TAQAI3I0A5UAPUK4UETVLLD&client_secret=1MDR0MSHV1L4T01OHEXYEE1CQ2XLN5M2Y4LT42H2EGPQETLT&v=20180323&limit=15&ll=37.7007467,-121.8934768&query=food')
    .then(res => res.json())
    .then(data => {
      let venues = data.response.groups[0].items.map(item => item.venue)
      venues.forEach(venue => {
        venue.isOpen = false
        venue.animation = 0
      });
      this.setState({venues: venues})
    })
    .catch(err => {
        this.setState({showErrors: true})
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
  onItemClick = (venue, ariaShow) => {
    this.onMarkerClick(venue)
  }
  // Set infowindow to appear when marker is clicked
  onMarkerClick = (venue) => {
    // Closes the previous marker
    if (this.selectedVenue !== null && this.selectedVenue !== venue) {
      this.selectedVenue.isOpen = false
      this.selectedVenue.animation = 0
    }
    // Stops animiation if clicked on same marker, otherwise set animation
    if(this.selectedVenue === venue && this.selectedVenue.animation === 1) {
      venue.animation = 0
    } else {
      venue.animation = 1
    }
      this.selectedVenue = venue
      venue.isOpen = !venue.isOpen 
      this.setState({venues: Object.assign(this.state.venues, venue)})
  }

  onKeyPressed = (venue) => {
     this.onMarkerClick(venue)
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
              <Map aria-label="Map"
              venues={this.state.venues}
              venueType={this.state.venueType} 
              onMarkerClick={this.onMarkerClick} />
            </Col>
            <Col className="venue-list-container" lg={3}>
                <VenueListContainer aria-label="Venue list container"
                venue={this.state.venues} 
                venueType={this.state.venueType} 
                onVenueTypeUpdate={this.onVenueTypeUpdate} 
                onItemClick={this.onItemClick}
                onKeyPressed={this.onKeyPressed}
                />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default App
