const CreateRaffleButtonBar = ({is_first, is_last, valid, step_forward, step_backward}) => {
    return (
        <div className="row action-button mb-5 justify-content-center">
            <div id="back-container" className="col-6">
                {is_first ? null : (
                    <button className="btn create-back back-btn mt-3" onClick={step_backward}>
                        Back
                    </button>
                )}
            </div>
            <div id="next-container" className="col-6 text-end">
                <button className="btn create-next next-btn mt-3" disabled={!valid} onClick={step_forward}>
                    {is_last ? "Finish" : "Next"}
                </button>
            </div>
        </div>
    )
}

export default CreateRaffleButtonBar;
