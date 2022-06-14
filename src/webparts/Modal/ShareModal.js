import { SHARE_INFO } from "../../statics";
import React from "react";

const ShareModal = ({close, show}) => {
    return (
        <div className={"modal fade" + (show ? " show" : null)} tabIndex="-1">
            <div className={"modal-backdrop fade" + (show ? " show" : "")} onClick={close}/>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <label htmlFor="Wallet-address" className="col-form-label text-center d-flex">
                            Where do you want to share?
                        </label>
                        <button type="button" className="btn-close" onClick={close}/>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className={'row'}>
                                {SHARE_INFO.map((shareItem) => (
                                    <div className={'col-4 text-center'} key={shareItem.title}>
                                        <a href={shareItem.share(window.location.href)} rel="noreferrer"
                                           target="_blank">
                                            {shareItem.title}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ShareModal;
