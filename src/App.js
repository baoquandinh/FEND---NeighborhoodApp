import React, { Component } from 'react';
import MapContainer from './components/MapContainer';
import SearchContainer from './components/SearchContainer';
class App extends Component {
 
  render() {
    return(
      <div id="app">
        <SearchContainer />
        <MapContainer />
      </div>
      
    )
  }
}
export default App;
