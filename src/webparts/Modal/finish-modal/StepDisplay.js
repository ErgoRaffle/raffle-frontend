import React from "react";

const SORTED_STATUS = [
    'waiting',
    'createdWaiting',
    'done'
]
const StepDisplay = ({totalStatus, status, stepTitle}) => {
    const statusIndex = SORTED_STATUS.indexOf(status) + 1
    return (
        <div className="modal-footer d-flex justify-content-center">
            <div className="donation-steps-description">
                <div className="donation-steps-box p-3">
                    <p className="donation-text">
                        {stepTitle}: <span>{status} {totalStatus ? `(${statusIndex} of ${totalStatus})` : ''}</span>
                    </p>
                </div>
            </div>
            <div className="donation-fine-print mt-2">
                In case of any failure, your funds are safe and will be sent back to your address.
            </div>
        </div>
    )
};

export default StepDisplay;

// {window.location.href.indexOf('raffle/donate') >= 0 ? 'Donation Steps' : 'Create Raffle Steps'}:
