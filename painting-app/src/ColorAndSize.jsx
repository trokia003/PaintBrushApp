import React, { Component } from 'react';
import BrushColorModal from './BrushColorModal';

class ColorAndSize extends Component {
  constructor(props){
    super(props);

    /*define state values here*/
    this.state = {
      showColorModal:false
    };
  }

  /*create function for buttons*/
  handleShowColorModalClick(){
    this.setState(
      {showColorModal: true}
    );
    console.log("show color modal button was pressed");
  }

  /*buttons for child BrushColorModal*/
  handleConfirmClick(){
    /*code*/
    this.setState(
      {showColorModal: false}
    );
  }
  handleCancelClick(){
    this.setState(
      {showColorModal: false}
    );
    console.log("cancel button clicked");
  }

  render() {
    return (
      <div id="color_and_size">
        <div className="half_color_and_size">
          <label id="brush_color_label">Brush Color</label> <button onClick={this.handleShowColorModalClick.bind(this)} className="color_and_size_button"></button>
        </div>
        <div className="half_color_and_size">
          <label id="brush_size_label">Brush Size: </label> <br/> <input type="range" min="1" max="50" step="1"></input>
        </div>

        {/*this is the modal that will pop up when the color button is pressed*/}
        <BrushColorModal
          showState={this.state.showColorModal}
          cancelButtonAction={this.handleCancelClick.bind(this)}
        />

      </div>
    );
  }
}

export default ColorAndSize;
