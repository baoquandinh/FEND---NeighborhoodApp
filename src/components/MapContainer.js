import React, {Component} from 'react'
import '../css/main.css'

class MapContainer extends Component {
    componentWillMount() {
        this.renderMap()
    }

    // Loads the google map
    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBHEgpD4hABDICXccQYltIfR_FpB1Xg0r8&callback=initMap")
        window.initMap = this.initMap
    }


    initMap = () => {
        // const staticMapStyle = new window.google.maps.StyledMapType (
        //     [{
        //         "elementType": "labels",
        //         "stylers": [
        //             {
        //                 "visibility": "off"
        //             }
        //         ]
        //     }]
        // )

        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 37.7007467, lng: -121.8934768},
            zoom: 14,
            mapTypeControl: false
       })
    }

    render() {
        return(
            <div id="map"></div>
        )
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


export default MapContainer