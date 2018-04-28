import React, { Component } from 'react';
import './App.css';

//section imports
import ColorAndSize from './ColorAndSizeContainer';
import DrawingSpace from './DrawingSpace';
import BrushTypes from './BrushTypes';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentBrushType: "1",
      currentBrushColor_red: "000",
      currentBrushColor_green: "000",
      currentBrushColor_blue: "000"
    };
  }

  /*create functions for manipulating states here, pass to ColorAndSizeContainer*/
  ChangeBrushType(new_brushType){
    this.setState(
      {currentBrushType: new_brushType}
    );
  }
  ChangeBrushColor(new_brushColor_red, new_brushColor_green, new_brushColor_blue){
    this.setState({
      currentBrushColor_red: new_brushColor_red,
      currentBrushColor_green: new_brushColor_green,
      currentBrushColor_blue: new_brushColor_blue
    });

    console.log("Inside of App.js the colors have changed");
    console.log(this.state.currentBrushColor_red);
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
                current_redColor={this.state.currentBrushColor_red}
                current_greenColor={this.state.currentBrushColor_green}
                current_blueColor={this.state.currentBrushColor_blue}
              />
            </div>


            <div id="drawing_space" className="component_sections">
              <DrawingSpace
                current_brush={this.state.currentBrushType}
                current_redColor={this.state.currentBrushColor_red}
                current_greenColor={this.state.currentBrushColor_green}
                current_blueColor={this.state.currentBrushColor_blue}
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
