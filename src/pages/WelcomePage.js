import React, {Component} from 'react'
import MapContainer  from '../components/MapContainer'
import SearchContainer from '../components/SearchContainer'


class WelcomePage extends Component {
    render(){
        return(
            <div>
                <div className="welcome-search-bar">
                    <SearchContainer />
                </div>
                <div className="static-map">
                    <MapContainer mapTypeId='terrain' mapTypeControl='false'/>
                </div>
            </div>
        )
    }
}

export default WelcomePage