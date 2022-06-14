import React from "react";

const TicketPriceBadge = ({value, handleChange, ticketPrice}) => {
    return (
        <React.Fragment>
            <input
                type="radio"
                className="btn-check"
                name="options-outlined"
                id={`erg${ticketPrice}`}
                onChange={() => handleChange(ticketPrice)}
                checked={ticketPrice === value}
            />
            <label className="btn btn-outline-danger" htmlFor={`erg${ticketPrice}`}>{ticketPrice} ERG</label>
        </React.Fragment>
    )
}

export default TicketPriceBadge;
