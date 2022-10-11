import React from "react";
import PropTypes from "prop-types";

function NewTicketForm() {
  function handleClickSubmit(event) {
    event.preventDefault();

    let newTicket = {
      names: event.target.names.value,
      location: event.target.locations.value,
      issue: event.target.issue.value,
    };
    console.log(newTicket);

    console.log(event.target.names.value);
    console.log(event.target.locations.value);
    console.log(event.target.issue.value);
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
  ticketList: PropTypes.array,
  onAddingNewTicket: PropTypes.func,
};

export default NewTicketForm;
