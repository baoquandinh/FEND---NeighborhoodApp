import React, {Component} from 'react'
import '../css/main.css'

class VenueItem extends Component {
    onClick = () => {
    this.props.onClick(this.props.venue)
  }

    render() {
        return(
            <li className="venue-item" aria-label="venue list item"onClick={this.onClick}>{this.props.venue.name}</li>
        )
    }
} 

export default VenueItem