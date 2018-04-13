import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Web Painting</h1>
          <h4>by Troy Warren</h4>
          <h5>Powered by React</h5>
        </header>
        <div id="body">

          <div id="brush_color_and_size">

          </div>


          <div id="drawing_space">

          </div>


          <div id="brush_types">

          </div>

        </div>
      </div>
    );
  }
}

export default App;
