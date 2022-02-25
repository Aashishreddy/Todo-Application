import React, { Component } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

class CountPopup extends Component {
  constructor() {    
    super();    
    this.state = {      
      popoverOpen: false    
    };
  }


togglePopover = () => {    
  this.setState({ popoverOpen: !this.state.popoverOpen })  
}

render() {
    const { popoverOpen } = this.state;

    return (
      <div>
        <Button id="mypopover" type="button">
          Click to Launch Popover
        </Button>
        <Popover
          placement="bottom"
          isOpen={popoverOpen}
          target="mypopover"
          toggle={this.togglePopover}
        >
          <PopoverHeader>This is popover title</PopoverHeader>
          <PopoverBody>
            This is simple popover content
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default CountPopup;