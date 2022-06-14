import React from "react";
import { toast } from "react-toastify";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import QRCode from "react-qr-code";

const CopiableAddress = ({address}) => {
    return (
        <React.Fragment>
            <p className="charity-address text-start">Address</p>
            <div className="row charity-address-box">
                <div className="col-lg-9">
                    <div className="charity-address-field">
                        <p className="charity-address-text cursor-pointer">
                            <CopyToClipboard text={address} onCopy={() => toast('Copied')}>
                                <span>{address}</span>
                            </CopyToClipboard>
                        </p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <QRCode value={address} size={200}/>
                </div>
            </div>
        </React.Fragment>
    )
};

export default CopiableAddress;
