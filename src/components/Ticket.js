import React from "react";

function Ticket(props) {
  return (
    <React.Fragment>
      <br />
      <h3>{props.names}</h3>
      <h3>{props.location}</h3>
      <p>
        <em>{props.issue}</em>
      </p>
      <hr />
    </React.Fragment>
  );
}

export default Ticket;
