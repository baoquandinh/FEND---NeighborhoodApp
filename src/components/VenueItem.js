import React, {Component} from 'react'
import '../css/main.css'

class VenueItem extends Component {
    onClick = () => {
    this.props.onClick(this.props.venue)
  }
  onFocus = () => {
      this.props.onFocus(this.props.venue)
  }

  keyPressed = (event) => {
      if (event.key === "Enter" || event.key === " ") {
          this.props.onKeyPressed(this.props.venue)
      } else {
          return //Does nothing
      }
  }

    render() {
        return(
            <li className="venue-item" tabIndex="0" role="button" aria-pressed="false" onKeyDown={this.keyPressed} aria-label={this.props.venue.name} onClick={this.onClick}>{this.props.venue.name}</li>
        )
    }
} 

export default VenueItem