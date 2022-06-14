import React from "react"

const RaffleTicket = ({transaction}) => {
    return (
        <div className="row mb-2">
            <div className="col-md-1">
                <div className=""/>
            </div>
            <div className="col-lg-8">
                <div className="wallet-address-box text-start">
                    <a href={transaction.link} target="_blank" className="wallet-address-title">Transaction ID: {transaction.id}</a>
                </div>
            </div>
            <div className="d-none d-lg-block col-lg-3">
                <div className="transaction-id text-start">
                    <p className="tickets-number-title">Number of Tickets: {transaction.tickets}</p>
                </div>
            </div>
        </div>
    )
};

export default RaffleTicket;
