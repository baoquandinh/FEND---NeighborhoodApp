import React, {Component} from 'react'

class VenueItem extends Component {
    onClick = () => {
    this.props.onClick(this.props.venue)
  }

    render() {
        return(
            <li onClick={this.onClick}>{this.props.venue.name}</li>
        )
    }
} 

export default VenueItem