import React, { Component } from 'react';
import './App.css';

//section imports
import ColorAndSize from './ColorAndSizeContainer';
import DrawingSpace from './DrawingSpace';
import BrushTypes from './BrushTypes';
import BrushColorModal from './BrushColorModal';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentBrushType: "simple_brush",
      currentBrushColor: "#000000"
    };
  }

  /*create functions for manipulating states here, pass to ColorAndSizeContainer*/
  ChangeBrushType(new_brushType){
    this.setState(
      {currentBrushType: new_brushType}
    );
  }
  ChangeBrushColor(new_brushColor){
    this.setState(
      {currentBrushColor: new_brushColor}
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Web Painting</h1>
        </header>
        <div id="body">

          {/*this is the container that aligns the components of the app horizontally*/}
          <div className="horizontally_align_items">

            <div id="brush_color_and_size_wrapper" className="component_sections">
              <ColorAndSize
                action_ChangeBrushType={this.ChangeBrushType.bind(this)}
                action_ChangeBrushColor={this.ChangeBrushColor.bind(this)}
              />
            </div>


            <div id="drawing_space" className="component_sections">
              <DrawingSpace
                current_color={this.state.currentBrushColor}
                current_brush={this.state.currentBrushType}
              />
            </div>


            <div id="brush_types_wrapper" className="component_sections">
              <BrushTypes />
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
