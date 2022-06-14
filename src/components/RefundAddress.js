import React from "react";

const RefundAddress = ({setRefund, refundAddress}) => {

    return (
        <form>
            <div className="form-floating create-raffle-input raffle-charity-input">
                <input
                    type="text"
                    value={refundAddress}
                    className="form-control"
                    id="floatingInput"
                    placeholder="Address"
                    onChange={e => setRefund(e.target.value)}
                    required
                />
                <label htmlFor="floatingInput">Proxy Address</label>
            </div>
        </form>
    )
};

export default RefundAddress;
