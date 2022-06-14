import React from "react";
import { memo } from "react";

const RaffleBarStep = ({title, steps, active, showStep}) => {
    return (
        <React.Fragment>
            <h3 className="help-request create-raffle-title text-center mt-3">
                {title}
            </h3>
            <ul className="multi-step">
                {steps.map((title, index) => (
                    <li className={active >= index ? "active": ""}>
                        <span className="circle"/>
                        {showStep ? `Step ${index + 1}:`: ''} {title}
                    </li>
                ))}
            </ul>
        </React.Fragment>
    )
};

export default RaffleBarStep;
