import React from "react";
import Ticket from "./Ticket";

function TicketList() {
  const ticketList = [
    {
      names: "Bart and Lisa",
      location: "Springfield Elementary",
      issue: "Martin's stuck on swing",
    },
    {
      names: "Barney and Homer",
      location: "Moe's Tavern",
      issue: "Moe's out of beer",
    },
    {
      names: "Willy and Skinner",
      location: "Springfield Elementary",
      issue: "Cat stuck in tree",
    },
  ];

  return (
    <React.Fragment>
      <hr />
      {ticketList.map((ticket) => (
        <Ticket names={ticket.names} location={ticket.location} issue={ticket.issue} />
      ))}
    </React.Fragment>
  );
}

export default TicketList;
