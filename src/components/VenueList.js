import React, {Component} from 'react'
import VenueItem from './VenueItem'

class VenueList extends Component {
    render(){
        return(
            <div>
                <ol>
                    {this.props.venue.filter(item => ((item.venue.categories[0].shortName.toLowerCase()).includes((this.props.venueType))) || (this.props.venueType ==='')).map(item => 
                    {return <VenueItem key={item.venue.id} item={item} itemType={item.venue.categories[0].name} onClick={this.props.onItemClick} />})}
                </ol>
            </div>
        )
    }
}

export default VenueList