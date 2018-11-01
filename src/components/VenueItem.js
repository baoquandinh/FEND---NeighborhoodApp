import React, {Component} from 'react'

class VenueItem extends Component {
    onClick = () => {
    this.props.onClick(this.props.item)
  }

    render() {
        return(
            <li onClick={this.onClick}>{this.props.item.venue.name}</li>
        )
    }
} 

export default VenueItem