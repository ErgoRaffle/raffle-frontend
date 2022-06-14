import React from "react";
import { TITLE_LENGTH } from '../../../statics';

const RaffleTitle = ({setValid, init, setValue}) => {
    setValid(!!init && init.length < TITLE_LENGTH)
    return (
        <div className="first-step step-1-a">
            <div className="step-content text-center text-lg-start">
                <h3 className="step-title mb-4">
                    Set Raffle's Title.
                </h3>
                <form>
                    <div
                        className="form-floating create-raffle-input raffle-name-input">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Title"
                            required
                            value={init}
                            onChange={e => setValue(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Title</label>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default RaffleTitle;
