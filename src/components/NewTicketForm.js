import React from "react";
import PropTypes from "prop-types";
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
      <h3>New Ticket Form</h3>
      <form onSubmit={handleClickSubmit}>
        <input type="text" name="names" placeholder="Names" />
        <input type="text" name="locations" placeholder="Location" />
        <textarea name="issue" placeholder="Describe the issue." />
        <button type="submit">Submit Ticket</button>
      </form>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onAddingNewTicket: PropTypes.func,
};

export default NewTicketForm;
