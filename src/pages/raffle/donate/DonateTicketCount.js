import React, { useState } from "react";
import Erg from "../../../components/Erg";
import { DONATION_TICKET_COUNT } from "../../../statics";
import TicketCountBadge from "./TicketCountBadge";

const DonateTicketCount = ({init, setValid, setValue, ticketPrice}) => {
    setValid(!!init);
    return (
        <React.Fragment>
            <h3 className="step-title">How Many Tickets to Buy?</h3>
            <form className={'my-5'}>
                <div className="row mt-3">
                    <div className="col-lg-12 text-center ticket-options-container">
                        {DONATION_TICKET_COUNT.map(item => (
                            <TicketCountBadge
                                key={item + '-'}
                                ticketCount={item}
                                handleChange={() => setValue(item)}
                                value={init}/>
                        ))}
                    </div>
                    <div className="col-lg-12">
                        <p className="ticket-price-text text-center mt-2 mb-lg-0">
                            Ticket Price:&nbsp;
                            <span className="ticket-price-number">
                                <Erg erg={ticketPrice} shouldDisplay={true}/>
                            </span>
                        </p>
                    </div>

                    <div className="form-floating ticket-count-input">
                        <input
                            onChange={e => setValue(Number(e.target.value + ''))}
                            type="number"
                            min={0}
                            step={1}
                            className="form-control"
                            id="floatingInput"
                            placeholder="Ticket Counts"
                            value={parseInt(init)}
                        />
                        <label htmlFor="floatingInput">Ticket Counts</label>
                    </div>
                    <p className="text-center mb-4">Total Donation:
                        <Erg erg={init * ticketPrice} shouldDisplay={true}/>
                    </p>
                </div>
            </form>
        </React.Fragment>)
};

export default DonateTicketCount;
