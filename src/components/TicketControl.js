import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formDisplayed: false,
      mainTicketList: [],
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ formDisplayed: !prevState.formDisplayed }));
  };

  handleAddNewTicket = () => {
    const newMainTicketList = [];

    this.setState({ mainTicketList: newMainTicketList });
  };

  render() {
    let currentlyDisplaying = null;
    let buttonText = null;

    if (this.state.formDisplayed) {
      currentlyDisplaying = <NewTicketForm onAddingNewTicket={this.handleAddNewTicket} />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyDisplaying = <TicketList />;
      buttonText = "Add New Help Ticket";
    }

    return (
      <React.Fragment>
        {currentlyDisplaying}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;
