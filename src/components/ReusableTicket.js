import React from "react";
import PropTypes from "prop-types";

function ReusableTicket(props) {
  return (
    <React.Fragment>
      <h3>Reusable Ticket</h3>
      <form onSubmit={handleClickSubmit}>
        <input type="text" name="names" placeholder="Names" />
        <input type="text" name="locations" placeholder="Location" />
        <textarea name="issue" placeholder="Describe the issue." />
        <button type="submit">Submit Ticket</button>
      </form>
    </React.Fragment>
  );
}

export default ReusableTicket;
