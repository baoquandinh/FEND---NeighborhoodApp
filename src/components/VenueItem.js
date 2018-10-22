import React, {Component} from 'react'

class VenueItem extends Component {
    render() {
        return(
            <li>{this.props.item.venue.name}</li>
        )
    }
} 

export default VenueItem