import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SearchContainer extends Component {
  render() {
    return(
      <div className="search-container">
        <input type="text" placeholder="Find: food, cleaners, stuff, stuff"/>
        <input type="text" placeholder="Location"/>
        <Link to="/search"><button>Submit</button></Link>
      </div>
     
    )
  }
}

export default SearchContainer