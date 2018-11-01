import React, {Component} from 'react'

class VenueListDropdown extends Component {
    updateVenue = (events) => {
        this.props.onChange(events.target.value)
    }

    render(){
        return(
            <div className="cs-select cs-skin-rotate">
	        <select className="cs-select cs-skin-rotate" onChange={(events) => {this.updateVenue(events)}}>
		        <option value="" disabled>Filter by food type</option>
	    	    <option value="all">All</option>
	    	    <option value="american">American</option>
	     	    <option value="burger">Burgers</option>
	     	    <option value="sandwich">Sandwiches</option>
                <option value="sushi">Sushi</option>
                <option value="fast food">Fast Food</option>
                <option value="italian">Italian</option>
	      </select>
        </div>
        )
    }
}

export default VenueListDropdown