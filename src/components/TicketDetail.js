import React from "react";

function TicketDetail(props) {
  const { ticket } = props;
  return (
    <React.Fragment>
      <h2>Ticket Detail</h2>
      <hr />
      <h3>{ticket.names}</h3>
      <h3>{ticket.location}</h3>
      <p>
        <em>{ticket.issue}</em>
      </p>
      <hr />
      <button onClick={props.onClickingEditTicket}>Edit Ticket</button>
      <button>Delete Ticket</button>
      <hr />
    </React.Fragment>
  );
}

export default TicketDetail;
