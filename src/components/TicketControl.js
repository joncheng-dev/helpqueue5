import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";
import TicketDetail from "./TicketDetail";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formDisplayed: false,
      mainTicketList: [],
      selectedTicket: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket !== null) {
      this.setState({
        formDisplayed: false,
        selectedTicket: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({ formDisplayed: !prevState.formDisplayed }));
    }
  };

  handleAddNewTicket = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({
      formDisplayed: false,
      mainTicketList: newMainTicketList,
    });
  };

  handleChangingSelectedTicket = (id) => {
    const clickedTicket = this.state.mainTicketList.filter((ticket) => ticket.id === id)[0];
    this.setState({
      selectedTicket: clickedTicket,
    });
  };

  handleEditTicket = (ticket) => {
    // grab ticket by id
  };

  render() {
    let currentlyDisplaying = null;
    let buttonText = null;
    if (this.state.selectedTicket !== null) {
      currentlyDisplaying = <TicketDetail ticket={this.state.selectedTicket} onClickingEditTicket={this.handleEditTicket} />;
      buttonText = "Return to Ticket List";
    } else if (this.state.formDisplayed) {
      currentlyDisplaying = <NewTicketForm onAddingNewTicket={this.handleAddNewTicket} />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyDisplaying = <TicketList ticketList={this.state.mainTicketList} onClickingTicket={this.handleChangingSelectedTicket} />;
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
