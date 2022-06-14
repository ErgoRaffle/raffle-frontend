import React from "react";
import EstimationBox from "../../../webparts/Raffle/EstimationBox";
import * as constant from '../../../statics'


const RaffleDeadline = ({setValue, init, setValid}) => {
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    setValid(!isNaN(init) && init > 0 && init < constant.DEADLINE_LIMIT)
    return (
        <div className="step-content text-center text-lg-start">
            <h3 className="step-title mb-4">Set Raffle's Deadline.</h3>
            <div className="row">
                <div className="col-6">
                    <form>
                        <div className="form-floating create-raffle-input raffle-deadline-input">
                            <input
                                value={init}
                                type="number"
                                min={0}
                                step={1}
                                className="form-control"
                                id="raffle-deadline"
                                placeholder="Blocks to Go"
                                required
                                onChange={handleChange}
                            />
                            <label htmlFor="raflfle-deadline">Blocks to Go</label>
                        </div>
                    </form>
                </div>
                <EstimationBox deadline={init}/>
            </div>
        </div>
    )
};

export default RaffleDeadline;
