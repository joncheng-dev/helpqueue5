import React from "react";

function TicketDetail(props) {
  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>Names</h3>
      <h3>Location</h3>
      <p>
        <em>Issue</em>
      </p>
      <button onClick={props.onClickingEditTicket}>Edit Ticket</button>
      <button>Delete Ticket</button>
    </React.Fragment>
  );
}

export default TicketDetail;
