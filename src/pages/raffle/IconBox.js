import React from "react";
import Erg from "../../components/Erg";

const IconBox = ({raffle}) => {
    return (
        <div className="row">
            <div className="col-4 text-center">
                <span className="slider-icon raffle-icon">
                    <span className="icon-new-hand slider-icon slider-icon2"/>
                </span>
                <p className="ico-text mt-2">
                    <span className="people-number">{raffle.donatedPeople}</span><br/>
                    Backers
                </p>
            </div>

            <div className="col-4 text-center">
                <span className="slider-icon raffle-icon">
                    <span className="icon-new-piggy slider-icon slider-icon1"/>
                </span>
                <p className="ico-text mt-2">
                    <span className="people-number">
                        <Erg shouldDisplay={false} erg={((raffle.ticket && raffle.ticket.erg) || 0)}/>
                    </span><br/>
                    ERG Collected
                </p>
            </div>
            <div className="col-4 text-center">
                <span className="slider-icon raffle-icon">
                    <span className="icon-new-tickt slider-icon ticket-icon"/>
                </span>
                <p className="ico-text mt-2">
                    <span className="people-number">{(raffle.ticket && raffle.ticket.sold)}</span><br/>
                    Tickets
                </p>
            </div>
        </div>
    )
};

export default IconBox;
