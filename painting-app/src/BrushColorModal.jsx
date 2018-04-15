import React, { Component } from 'react';

class BrushColorModal extends Component {
  constructor(props){
    super(props);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.state = {isToggleOn: false};
  }

  /*create function for buttons*/
  handleConfirmClick(){

    this.setState({isToggleOn: false});
  }
  handleCancelClick(){
    this.setState({isToggleOn: false});
  }

  render() {
    if(this.state.isToggleOn){
      return (
        <div className="brush_color_and_size_modal">
          <h1>Change Brush Color</h1>

          <div id="color_box"></div>

          <div id="color_sliders">
            <label>Red value selected: </label><input id="red_slider" type="range" min="0" max="255" step="5"/><br/>
            <label>Green value selected: </label><input id="green_slider" type="range" min="0" max="255" step="5"/><br/>
            <label>Blue value selected: </label><input id="blue_slider" type="range" min="0" max="255" step="5"/>
          </div>

          <div className="modal_finish_buttons">
            <button>Confirm</button>
            <button onClick={this.handleCancelClick}>Cancel</button>
          </div>
        </div>
      );
    }
    else{
      return(
        <div>

        </div>
      );
    }
  }
}

export default BrushColorModal;