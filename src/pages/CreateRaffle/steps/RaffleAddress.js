import React from "react";

const RaffleAddress = ({label, setValue, setValid, init}) => {
    setValid(!!init)
    return (
        <div className="first-step step-1-d">
            <div className="step-content text-center text-lg-start">
                <h3 className="step-title mb-4">{label}</h3>
                <form>
                    <div className="form-floating create-raffle-input raffle-charity-input">
                        <input
                            type="text"
                            value={init}
                            className="form-control"
                            id="floatingInput"
                            placeholder="Address"
                            onChange={e => setValue(e.target.value)}
                            required
                        />
                        <label htmlFor="floatingInput">Address</label>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default RaffleAddress;
