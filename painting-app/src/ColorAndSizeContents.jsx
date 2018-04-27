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
        <div id="color_picker_section">
          <div className="center_contents">
            <label>Brush Color</label><br/><br/>
            <button className="color_and_size_button" onClick={this.showColorModal_ButtonClicked.bind(this)}></button><br/>
          </div>
        </div>
        <div id="brush_size_section">
          <div className="center_contents">
            <label>Brush Size: </label><br/><br/>
            <input type="range" min="1" max="50" step="1"></input><br/>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorAndSizeContents;
