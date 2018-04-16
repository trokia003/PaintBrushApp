import React, { Component } from 'react';

class ColorAndSizeContents extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  showColorModal_ButtonClicked(){
    this.props.showColorModalButtonAction();
  }

  render() {
    return (
      <div>
        <label>Brush Color</label><br/>
      <button className="color_and_size_button" onClick={this.showColorModal_ButtonClicked.bind(this)}></button><br/>
        <label>Brush Size: </label><br/>
        <input type="range" min="1" max="50" step="1"></input><br/>
      </div>
    );
  }
}

export default ColorAndSizeContents;
