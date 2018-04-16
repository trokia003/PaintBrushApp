import React, { Component } from 'react';
import BrushColorModal from './BrushColorModal';
import ColorAndSizeContents from './ColorAndSizeContents';

class ColorAndSize extends Component {
  constructor(props){
    super(props);

    /*define state values here*/
    this.state = {
      showColorModal:false
    };
  }

  /*create function for buttons*/
  handle_ShowColorModal_Click(){
    this.setState(
      {showColorModal: true}
    );
    console.log("show color modal button was pressed");
  }

  /*buttons for child BrushColorModal*/
  handle_Confirm_Click(){
    /*code*/
    this.setState(
      {showColorModal: false}
    );
    console.log("confirm button clicked");
  }
  handle_Cancel_Click(){
    this.setState(
      {showColorModal: false}
    );
    console.log("cancel button clicked");
  }

  render() {
    if(this.state.showColorModal){
      return (
        <div>

          <ColorAndSizeContents
            showColorModalButtonAction={this.handle_ShowColorModal_Click.bind(this)}
          />

          {/*this is the modal that will pop up when the color button is pressed*/}
          <BrushColorModal
            cancelButtonAction={this.handle_Cancel_Click.bind(this)}
            confirmButtonAction={this.handle_Confirm_Click.bind(this)}
          />

        </div>
      );
    }
    else {
      return(
        <div>

          <ColorAndSizeContents
            showColorModalButtonAction={this.handle_ShowColorModal_Click.bind(this)}
          />

        </div>
      );
    }
  }
}

export default ColorAndSize;
