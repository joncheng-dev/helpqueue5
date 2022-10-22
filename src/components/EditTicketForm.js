import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from "uuid";

function EditTicketForm(props) {
  function handleEditTicketFormSubmit(event) {
    event.preventDefault();

    props.onSubmitEditTicket({
      names: event.target.names.value,
      location: event.target.locations.value,
      issue: event.target.issue.value,
      id: v4(),
    });
  }
  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleEditTicketFormSubmit} buttonText="Submit Edited Ticket" />
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  onSubmitEditTicket: PropTypes.func,
};

export default EditTicketForm;
