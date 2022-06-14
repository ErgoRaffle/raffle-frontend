import React from 'react'

const type_label = txType => {
    if (txType === 'ticket') return "Donation"
    if (txType === 'refund') return "Refund"
    return ""
}
const TransactionRow = ({transaction, row, status}) => {
    const border_class = status === 'winner' || status === 'charity' ? 'bordered-field-orange' : 'gray-field';
    return (
        <div className="transaction-container my-5">
            <div className="row g-1 g-md-2 mb-2">
                {row ? (
                    <div className="col-1">
                        <div className="transaction-id gray-field text-center row-number-box">
                            <p>
                                <span className="row-number">{row}</span>
                            </p>
                        </div>
                    </div>
                ) : null}
                <div className={row ? "col-11" : "col-12"}>
                    <div className={`wallet-address-box ${border_class}`}>
                        <p>
                            Wallet Address : <span className="tickets-number">{transaction.address}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="row g-1 g-md-2 justify-content-start justify-content-lg-end">
                <div className={row ? "col-11 col-lg-8 offset-1 offset-lg-0" : "col-12"}>
                    <div className={`transaction-id ${border_class}`}>
                        <p>
                            {type_label(transaction.type)}
                            &nbsp;Transaction ID: <a href={transaction.link} target="_blank" rel="noreferrer">
                            <span className="transaction-id-text">{transaction.id}</span></a>
                        </p>
                    </div>
                </div>
                {row ? (
                    <div className="col-6 col-lg-3 offset-1 offset-lg-0">
                        <div className="transaction-id gray-field">
                            <p>
                                Number of Tickets : <span className="tickets-number"> {transaction.tickets} </span>
                            </p>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
};

export default TransactionRow;
