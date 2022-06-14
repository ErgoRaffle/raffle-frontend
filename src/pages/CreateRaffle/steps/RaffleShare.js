import { memo, useContext, useState } from "react";
import ThemeContext from "../../../context";

const RaffleShare = ({init, setValue, setValid}) => {
    const context = useContext(ThemeContext);
    const service_fee = context.info.serviceFee;
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const num = Number(init);
    setValid(!isNaN(num) && num + service_fee < 100 && num > 0);
    return (
        <div className="step-content text-center text-lg-start">
            <h3 className="step-title mb-4">
                Set the Charity Share.
            </h3>
            <div className="row">
                <div className="col-4">
                    <form>
                        <div className="form-floating create-raffle-input charity-share-input">
                            <input
                                value={init}
                                type="number"
                                className="form-control"
                                id="charity-share"
                                placeholder="Ticket Share Percent"
                                required
                                onChange={handleChange}
                            />
                            <label htmlFor="charity-share">Charity Share</label>
                        </div>
                    </form>
                </div>
                <div className="col-4">
                    <p className="raffle-sharing winner-share">Winner
                        Percent: {100 - (isNaN(init) ? 0 : init) - context.info.serviceFee}%</p>
                </div>
                <div className="col-4">
                    <p className="raffle-sharing service-share">Service: {context.info.serviceFee}%</p>
                </div>
            </div>
        </div>
    )
};

export default RaffleShare;
