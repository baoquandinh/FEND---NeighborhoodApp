// /* global google*/
import React, {Component} from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
const GoogleMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 37.7007467, lng: -121.8934768 }}
    >
    {
      props.venues.filter(venue => ((venue.categories[0].shortName.toLowerCase()).includes((props.venueType))) || (props.venueType ===''))
      .map(venue => {
        return <Marker 
          key={venue.id} 
          position={{lat:venue.location.lat, lng: venue.location.lng}} 
          animation={venue.animation}
          onClick={() => props.onClick(venue)}>
          {venue.isOpen && <InfoWindow>
            <p>{venue.name}</p>
            </InfoWindow>}
        </Marker>
      })}
  </GoogleMap>
))

class Map extends Component{
  render(){
    return(
    <GoogleMapComponent
      venues={this.props.venues}
      venueType={this.props.venueType}
      onClick={this.props.onMarkerClick}
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBHEgpD4hABDICXccQYltIfR_FpB1Xg0r8"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />)
  }
}
export default Map