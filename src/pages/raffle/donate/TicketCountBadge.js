import React from "react";

const TicketCountBadge = ({value, handleChange, ticketCount}) => {
    return (
        <React.Fragment>
            <input
                type="radio"
                className="btn-check"
                name="options-outlined"
                id={`erg${ticketCount}`}
                onChange={() => handleChange(ticketCount)}
                checked={ticketCount === value}
            />
            <label className="btn btn-outline-danger" htmlFor={`erg${ticketCount}`}>
                {ticketCount} Ticket{ticketCount > 1 ? "s" : ""}
            </label>
        </React.Fragment>
    )
}

export default TicketCountBadge;
