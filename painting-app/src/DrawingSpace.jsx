import React, { Component } from 'react';

class DrawingSpace extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentBrushType: props.current_color,
      currentBrushColor: props.current_brush
    }
  }


  render() {
    return (
      <div>
        <canvas id="DrawingArea" width="800" height="600"/>
      </div>
    );
  }
}



export default DrawingSpace;
