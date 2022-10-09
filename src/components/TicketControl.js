import React from "react";
import TicketList from "./TicketList";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formDisplayed: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <TicketList />
      </React.Fragment>
    );
  }
}

export default TicketControl;
