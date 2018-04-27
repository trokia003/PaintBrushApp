import React, { Component } from 'react';

class BrushColorModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_redColor: props.current_redColor,
      current_greenColor: props.current_greenColor,
      current_blueColor: props.current_blueColor
    };
  }

  //these are methods for getting the current color
  get_currentRedColor(){

  }



  //these are methods for changing the current color
  update_currentBrushColor(new_color){
    this.props.action_ChangeBrushColor(new_color);

    console.log("brush color was changed");
    console.log(this.state.current_color);
  }

  cancel_ButtonClicked(){
    this.props.cancelButtonAction();
    console.log(this.state.current_color);
  }
  confirm_ButtonClicked(){
    this.props.confirmButtonAction();
    this.update_currentBrushColor("255255255");
  }

  //===========================================

  render() {
    return (
      <div className="brush_color_and_size_modal">
        <h1>Change Brush Color</h1>

        <div id="color_box"></div>

        <div id="color_sliders">
          <label>Red value selected: </label><label id="current_red_value">{this.state.current_redColor} </label><input id="red_slider" value={this.state.current_redColor} type="range" min="0" max="255" step="5"/><br/>
          <label>Green value selected: </label><label id="current_green_value">{this.state.current_greenColor} </label><input id="green_slider" value={this.state.current_greenColor} type="range" min="0" max="255" step="5"/><br/>
          <label>Blue value selected: </label><label id="current_blue_value">{this.state.current_blueColor} </label><input id="blue_slider" value={this.state.current_blueColor} type="range" min="0" max="255" step="5"/>
        </div>

        <div className="modal_finish_buttons">
          <button onClick={this.confirm_ButtonClicked.bind(this)}>Confirm</button>
          <button onClick={this.cancel_ButtonClicked.bind(this)}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default BrushColorModal;
