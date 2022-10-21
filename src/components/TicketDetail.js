import React from "react";

function TicketDetail(props) {
  const { ticket } = props;
  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>{ticket.names}</h3>
      <h3>{ticket.location}</h3>
      <p>
        <em>{ticket.issue}</em>
      </p>
      <button onClick={props.onClickingEditTicket}>Edit Ticket</button>
      <button>Delete Ticket</button>
    </React.Fragment>
  );
}

export default TicketDetail;
