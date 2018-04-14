import React, { Component } from 'react';

class DrawingSpace extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
        <canvas id="DrawingArea" width="600" height="400"/>
      </div>
    );
  }
}



export default DrawingSpace;
