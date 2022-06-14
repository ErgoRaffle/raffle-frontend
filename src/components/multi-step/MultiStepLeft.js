import React from "react";

const MultiStepLeft = ({steps, active}) => {
    return (
        <React.Fragment>
            <div className="d-md-block d-none">
                <ul className="multi-step-left">
                    {steps.map((item, index) => (
                        <li className={index <= active ? "active" : ""}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="d-md-none d-block">
                field
                <span className="substep-number"> {active + 1}</span> of {steps.length}: {steps[active]}
            </div>
        </React.Fragment>
    )
}

export default MultiStepLeft;
