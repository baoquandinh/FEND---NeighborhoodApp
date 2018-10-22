import React, {Component} from 'react'
import VenueItem from './VenueItem'

class VenueList extends Component {
    render(){
        return(
            <div>
                <ol>
                    {/* Venue List Item */}
                    {this.props.venue.map((item) => {
                        return <VenueItem key={item.venue.id} item={item}/>
                    })}
                </ol>
            </div>
            // Lists all venue by default
        )
    }
}

export default VenueList