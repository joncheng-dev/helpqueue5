import React from "react";
import PropTypes from "prop-types";
import ReusableTicket from "./ReusableTicket";
import { v4 } from "uuid";

function NewTicketForm(props) {
  function handleClickSubmit(event) {
    event.preventDefault();

    props.onAddingNewTicket({
      names: event.target.names.value,
      location: event.target.locations.value,
      issue: event.target.issue.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <ReusableForm buttonText="Submit Ticket" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onAddingNewTicket: PropTypes.func,
};

export default NewTicketForm;
