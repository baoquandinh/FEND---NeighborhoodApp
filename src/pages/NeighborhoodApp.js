import React, {Component} from 'react'
import MapContainer  from '../components/MapContainer'
import SearchContainer from '../components/SearchContainer'


class NeighborhoodApp extends Component {
    render(){
        return(
            <div id="">
                <div className="search-container ">
                    <SearchContainer />
                </div>
                <div className="static-map">
                    <MapContainer/>
                </div>
            </div>
        )
    }
}

export default NeighborhoodApp