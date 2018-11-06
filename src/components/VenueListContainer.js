import React, {Component} from 'react'
import VenueListDropwdown from './VenueListDropdown';
import VenueList from './VenueList';


class VenueListContainer extends Component {
  render() {
    return(
      <div className="venue-list-container">
          <VenueListDropwdown onChange={this.props.onVenueTypeUpdate} />
          <VenueList venue={this.props.venue} venueType={this.props.venueType} onItemClick={this.props.onItemClick}/>
      </div>
    )
  }
}

export default VenueListContainer