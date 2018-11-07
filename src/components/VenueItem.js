import React, {Component} from 'react'
import '../css/main.css'

class VenueItem extends Component {
    onClick = () => {
    this.props.onClick(this.props.venue)
  }

    render() {
        return(
            <li className="venue-item" tabIndex="0" aria-role="button" onKeyDown="if(event.keyCode=32){}" aria-label={this.props.venue.name} onClick={this.onClick}>{this.props.venue.name}</li>
        )
    }
} 

export default VenueItem