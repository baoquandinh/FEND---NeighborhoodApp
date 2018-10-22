import React, {Component} from 'react'
import '../css/main.css'

const url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBHEgpD4hABDICXccQYltIfR_FpB1Xg0r8&callback=initMap"

class Map extends Component {
    componentWillMount() {
        this.setState({myVenues: this.props.venue}, this.renderMap())
    }
    
    loadVenues() {
        // this.setState({myVenues: this.props.venue})
    }

    // getAllVenues() {
    //     fetch('https://api.foursquare.com/v2/venues/explore?client_id=P51OPZBHXUNV55SMH1K3G0FI5TAQAI3I0A5UAPUK4UETVLLD&client_secret=1MDR0MSHV1L4T01OHEXYEE1CQ2XLN5M2Y4LT42H2EGPQETLT&v=20180323&limit=16&ll=37.7007467,-121.8934768&query=burger')
    //     .then(res => res.json())
    //     .then(data => {
    //       this.setState({myVenues: data.response.groups[0].items}, this.renderMap())
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     });
    // }

    renderMap = () => {
        loadScript(url)
        window.initMap = this.initMap
    }

    initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 37.7007467,
                lng: -121.8934768
            },
            zoom: 14,
            mapTypeControl: false
        })

        this.props.venue.forEach(item => {
            let marker = new window.google.maps.Marker({
                position: {lat: item.venue.location.lat, lng: item.venue.location.lng},
                map: map,
                animation: window.google.maps.Animation.DROP
            })
            console.log(this.props.venue)
        })
        // (myVenues => {
        //     let marker = new window.google.maps.Marker({
        //     position: {
        //         lat: myVenues.venue.location.lat,
        //         lng: myVenues.venue.location.lng
        //     },
        //     map: map,
        //     animation: window.google.maps.Animation.DROP
        // })
        // })
    }
    render() {
        return (<div id="map"></div>)
    }
}

// Inserts our script to call google api
function loadScript(url) {
    let index = window.document.getElementsByTagName("script")[0]
    let script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}
export default Map