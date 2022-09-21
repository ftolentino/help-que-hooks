import React from "react";
import Ticket from "./Ticket.js";
import PropTypes from "prop-types";

const TicketList = (props) => {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.ticketList).map((ticket) =>
        <Ticket
          whenTicketClicked = { props.onTicketSelection }
          names={ticket.names}
          location={ticket.location}
          formattedWaitTime={ticket.formattedWaitTime}
          issue={ticket.issue}
          id={ticket.id}
          key={ticket.id}/>
      )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default TicketList;