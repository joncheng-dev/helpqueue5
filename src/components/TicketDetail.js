import React from "react";

function TicketDetail(props) {
  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>{props.names}</h3>
      <h3>{props.location}</h3>
      <p>
        <em>{props.issue}</em>
      </p>
      <button onClick={props.onClickingEditTicket}>Edit Ticket</button>
      <button>Delete Ticket</button>
    </React.Fragment>
  );
}

export default TicketDetail;
