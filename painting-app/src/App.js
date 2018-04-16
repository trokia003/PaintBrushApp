import React, { Component } from 'react';
import './App.css';

//section imports
import ColorAndSize from './ColorAndSize';
import DrawingSpace from './DrawingSpace';
import BrushTypes from './BrushTypes';
import BrushColorModal from './BrushColorModal';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Web Painting</h1>
        </header>
        <div id="body">

          <div id="brush_color_and_size" className="component_sections">
            <ColorAndSize />
          </div>


          <div id="drawing_space" className="component_sections">
            <DrawingSpace />
          </div>


          <div id="brush_types" className="component_sections">
            <BrushTypes />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
