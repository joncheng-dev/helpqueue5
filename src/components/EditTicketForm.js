import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditTicketForm(props) {
  const { ticket } = props;
  function handleEditTicketFormSubmit(event) {
    event.preventDefault();

    props.onSubmitEditTicket({
      names: event.target.names.value,
      location: event.target.locations.value,
      issue: event.target.issue.value,
      id: ticket.id,
    });
  }
  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleEditTicketFormSubmit} buttonText="Submit Edited Ticket" />
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  onSubmitEditTicket: PropTypes.func,
};

export default EditTicketForm;
