import React from "react";

const TermsModal = ({close, show}) => {
    return (
        <React.Fragment>
            <div
                className={"modal fade" + (show ? " show" : "")}
                tabIndex="-1"
                style={{display: show ? "block" : "none"}}
                aria-labelledby="donationModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-3">
                        <div className="modal-header">
                            <h3 className="donation-modal-instruction">
                                Terms of Use
                            </h3>
                            <button
                                onClick={close}
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <ul>
                                <li>
                                    Creating or participating in raffles and receiving donations is not illegal in your
                                    country.
                                </li>
                                <li>
                                    You are over the legal age required to use financial services such as running
                                    raffles and are not creating a raffle on behalf of an underage person or anyone who
                                    is not legally allowed to create raffles.
                                </li>
                                <li>
                                    You are solely responsible for all legal or moral obligations and liabilities, and
                                    the service does not have any obligations or liabilities.
                                </li>
                                <li>
                                    You are participating in a raffle to the described purpose and making donations
                                    solely for supporting the project and without any intent to win the prize.
                                </li>
                                <li>
                                    The raised funds will be used solely for the described purpose of the raffle.
                                </li>
                                <li>
                                    You are solely responsible for any due taxes and legal reports.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"modal-backdrop fade" + (show ? " show" : "")} onClick={close}/>
        </React.Fragment>
    )
}

export default TermsModal;
