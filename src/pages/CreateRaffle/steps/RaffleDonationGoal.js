import React from "react";

const RaffleDonationGoal = ({init, setValue, setValid}) => {
    const handleChange = (e) => {
        const {value} = e.target;
        console.log(value);
        setValue(value.split('-').join(''));
    }
    setValid(!isNaN(init) && Number(init) > 0)
    return (
        <div className="step-content text-center text-lg-start">
            <h3 className="step-title mb-4">
                How Many ERG to Collect?
            </h3>
            <form>
                <div className="form-floating create-raffle-input raffle-donation-input">
                    <input
                        type="number"
                        min={1}
                        step={1}
                        className="form-control"
                        id="floatingInput"
                        placeholder="Donation Amount"
                        onChange={handleChange}
                        // onKeyDown={handleChange}
                        value={init}
                    />
                    <label htmlFor="floatingInput">Amount (ERG)</label>
                </div>
            </form>
        </div>
    )
};

export default RaffleDonationGoal;
