import React, {Component} from 'react'
import DropdownMenu from './DropdownMenu'
import VenueList from './VenueList'

class VenueListContainer extends Component {

  render() {
    return(
      <div className="search-container">
      {/* Dropdown Menu Component  */}
      <DropdownMenu/>
      {/* List of all Venue Component*/}
      <VenueList venue={this.props.venue}/>
      </div>
    )
  }
}

export default VenueListContainer