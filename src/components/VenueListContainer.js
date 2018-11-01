import React, {Component} from 'react'
import VenueListDropwdown from './VenueListDropdown';
import VenueList from './VenueList';


class VenueListContainer extends Component {
  render() {
    return(
      <div className="">
        <div className="venue-list-dropdown">
          <VenueListDropwdown onChange={this.props.onVenueTypeUpdate} />
        </div>
        <div className="venue-list">
          <VenueList venue={this.props.venue} venueType={this.props.venueType} onItemClick={this.props.onItemClick}/>
        </div>
      </div>
    )
  }
}

export default VenueListContainer