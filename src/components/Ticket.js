import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <React.Fragment>
      <br />
      <div onClick={}>
        <h3>{props.names}</h3>
        <h3>{props.location}</h3>
        <p>
          <em>{props.issue}</em>
        </p>
      </div>
      <hr />
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
};

export default Ticket;
