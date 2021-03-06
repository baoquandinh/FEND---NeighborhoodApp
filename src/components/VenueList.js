import React, {Component} from 'react'
import VenueItem from './VenueItem'

class VenueList extends Component {
    render(){
        return(
                <ol>
                    {this.props.venue.filter(venue => ((venue.categories[0].shortName.toLowerCase()).includes((this.props.venueType))) || (this.props.venueType ==='')).map(venue => 
                    {return <VenueItem aria-label="Venue item component" key={venue.id} venue={venue} itemType={venue.categories[0].name} onClick={this.props.onItemClick} onKeyPressed={this.props.onKeyPressed} />})}
                </ol>
        )
    }
}

export default VenueList