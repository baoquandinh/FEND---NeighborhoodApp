import React, {Component} from 'react'
import '../css/dropdown.css'

class DropdownMenu extends Component {
    updateVenue = () => {
        this.onUpdate()
    }


    render(){
        return(
        <div className="cs-select cs-skin-rotate">
            {/* <span className="cs-placeholder">Choose your option</span> */}
	        <select className="cs-select cs-skin-rotate" onChange={(event) => {this.updateVenue()}}>
		        <option value="" disabled>Choose your option</option>
	    	    <option value="1">Option 1</option>
	     	    <option value="2">Option 2</option>
	     	    <option value="3">Option 3</option>
	      </select>
        </div>
        )
    }
}

export default DropdownMenu