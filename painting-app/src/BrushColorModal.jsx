import React, { Component } from 'react';

class BrushColorModal extends Component {
  constructor(props){
    super(props);

    this.updateLabel_redValue = this.updateLabel_redValue.bind(this);
    this.updateLabel_greenValue = this.updateLabel_greenValue.bind(this);
    this.updateLabel_blueValue = this.updateLabel_blueValue.bind(this);
    this.updateColorBox = this.updateColorBox.bind(this);
    this.rgbToHex = this.rgbToHex.bind(this);
    this.componentToHex = this.componentToHex.bind(this);

    this.state = {
      current_redColor: props.current_redColor,
      current_greenColor: props.current_greenColor,
      current_blueColor: props.current_blueColor,
      testState: "test"
    };
  }

  //these are methods for changing the current color
  update_currentBrushColor(r, g, b){
    this.props.action_ChangeBrushColor(r, g, b);

    console.log("brush color was changed");
  }

  cancel_ButtonClicked(){
    this.props.cancelButtonAction();
  }
  confirm_ButtonClicked(){
    this.props.confirmButtonAction();
    this.update_currentBrushColor(this.state.current_redColor, this.state.current_greenColor, this.state.current_blueColor);
  }

  //--------------------------------------------

  //these are methods for updating labels that reflect the current input value
  updateLabel_redValue(){
    var newRedValue = document.getElementById("red_slider").value;
    this.setState({
      current_redColor: newRedValue
    });

    this.updateColorBox();
  }
  updateLabel_greenValue(){
    var newGreenValue = document.getElementById("green_slider").value;
    this.setState({
      current_greenColor: newGreenValue
    });

    this.updateColorBox();
  }
  updateLabel_blueValue(){
    var newBlueValue = document.getElementById("blue_slider").value;
    this.setState({
      current_blueColor: newBlueValue
    });

    this.updateColorBox();
  }

  //-----------------------------------------

  //this is the method for reflecting the changes in the color box
  updateColorBox(){
    var colorBox = document.getElementById("color_box");
    colorBox.style.backgroundColor = this.rgbToHex(this.state.current_redColor, this.state.current_greenColor, this.state.current_blueColor);

    this.setState({
      testState: this.state.testState
    });
  }

  //get the hexadecimal value of a single color value (red, green, or blue)
  componentToHex(colorComponent){
    var hexValue = parseInt(colorComponent, 10).toString(16);
    return hexValue.length == 1 ? "0" + hexValue : hexValue;
  }
  rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  //===========================================

  componentDidMount(){
    this.updateColorBox();
  }

  render() {
    return (
      <div className="brush_color_and_size_modal">
        <h1>Change Brush Color</h1>

        <div id="color_box"></div>

        <div id="color_sliders">
          <label>Red value selected: </label><label id="current_red_value">{this.state.current_redColor} </label><input id="red_slider" value={this.state.current_redColor} onChange={this.updateLabel_redValue.bind(this)} onMouseUp={this.updateColorBox} type="range" min="0" max="255" step="5"/><br/>
          <label>Green value selected: </label><label id="current_green_value">{this.state.current_greenColor} </label><input id="green_slider" value={this.state.current_greenColor} onChange={this.updateLabel_greenValue.bind(this)} onMouseUp={this.updateColorBox} type="range" min="0" max="255" step="5"/><br/>
          <label>Blue value selected: </label><label id="current_blue_value">{this.state.current_blueColor} </label><input id="blue_slider" value={this.state.current_blueColor} onChange={this.updateLabel_blueValue.bind(this)} onMouseUp={this.updateColorBox} type="range" min="0" max="255" step="5"/>
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
