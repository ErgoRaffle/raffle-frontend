import { memo } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../context";

const HomeLeftColumn = memo(() => {
    return (<ThemeContext.Consumer>
        {({hasWallet}) => (
            <div className="card mt-6" id="left-col">
                <div className="card-body">
                    <h2 className="card-title mt-6">
                        No act of kindness, no matter how small, is ever wasted
                    </h2>
                    <h6 className="card-subtitle mt-2 mb-6">James Joyce</h6>

                    <div className="create-raffle d-flex">
                        {hasWallet.length > 5 ?
                            <Link to={"/raffle/create"}>
                                <button type="button" className="btn btn-create-raffle">
                                    Create Raffle
                                </button>
                            </Link>
                            : <div data-bs-toggle="modal" data-bs-target="#walletModal">
                                <button type="button" className="btn btn-create-raffle">
                                    Create Raffle
                                </button>
                            </div>}
                    </div>
                </div>
            </div>
        )}
    </ThemeContext.Consumer>)
});

export default HomeLeftColumn;
