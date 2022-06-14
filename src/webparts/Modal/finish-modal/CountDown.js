import React from "react";

const WARNING_THRESHOLD = 80;
const ALERT_THRESHOLD = 20;

const CountDown = ({percent, remainingSeconds}) => {
    const colorClass = percent < ALERT_THRESHOLD ? "red" : percent < WARNING_THRESHOLD ? "orange" : "green";
    let FULL_DASH_ARRAY = 283;
    let current_dash_array = percent * FULL_DASH_ARRAY / 100;
    return (
        <React.Fragment>
            <div className="text-center operation-text mt-5">
                <p>
                    The operation will be done automatically afterward. It is safe to close this window. Keeping it open
                    will show the donation process.
                </p>
            </div>
            <div className="timer-container d-flex justify-content-center align-items-center">
                <div className="timer text-center mt-3">
                    <div id="timer-countdown">
                        <div className="base-timer">
                            <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <g className="base-timer__circle">
                                    <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"/>
                                    <path
                                        id="base-timer-path-remaining"
                                        strokeDasharray={`${current_dash_array} 283`}
                                        className={`base-timer__path-remaining timer-${colorClass}`}
                                        d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"
                                    />
                                </g>
                            </svg>
                            <span id="base-timer-label" className="base-timer__label">
                            {remainingSeconds} Second{remainingSeconds > 1 ? "s" : ""}
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default CountDown;
