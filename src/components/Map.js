import React, {Component} from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
const GoogleMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 37.7007467, lng: -121.8934768 }}
    >
    {props.venue.filter(item => ((item.venue.categories[0].shortName.toLowerCase()).includes((props.venueType))) || (props.venueType ===''))
    .map(item => (
      <Marker 
        key={item.venue.id} 
        position={{lat:item.venue.location.lat, lng: item.venue.location.lng}} 
        onClick={() => props.onMarkerClick(item.venue)}>
        {item.venue.isOpen && (<InfoWindow><p>Hello</p></InfoWindow>)}
      </Marker>))} 
  </GoogleMap>
))

class Map extends Component{
  render(){
    return(
    <GoogleMapComponent
      venue={this.props.venue}
      venueType={this.props.venueType}
      markers ={this.props.markers}
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