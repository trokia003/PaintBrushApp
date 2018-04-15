import React, { Component } from 'react';

class ColorAndSize extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div id="color_and_size">
        <div className="half_color_and_size">
          <label id="brush_color_label">Brush Color</label> <button className="color_and_size_button"></button>
        </div>
        <div className="half_color_and_size">
          <label id="brush_size_label">Brush Size: </label> <br/> <input type="range" min="1" max="50" step="1"></input>
        </div>




      </div>
    );
  }





}

export default ColorAndSize;
