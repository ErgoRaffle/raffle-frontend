import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext  from "../../context";
import Logo from "./Logo";

const MobileHeader = ({mobileHeaderRef}) => {
    const context = useContext(ThemeContext);
    return (
        <div ref={mobileHeaderRef} className="fixed-top">
            <section id="mobile-nav" className="d-flex d-lg-none px-4 py-2 align-items-center justify-content-between">
                <div className="mobile-navbar-buttons">
                    <a
                        href="#sidebar"
                        className="mobile-nav-toggler"
                        data-bs-toggle="offcanvas"
                        role="button"
                        aria-controls="sidebar">
                        <span className="navbar-toggler-icon icon-navbarToggle"/>
                    </a>
                    <button
                        type="button"
                        className="btn set-wallet set-wallet-mobile"
                        data-bs-toggle="modal"
                        data-bs-target="#walletModal"
                    >
                        {
                            !context.hasWallet ?
                                'Set Wallet'
                                :
                                <span className={'smaller-wallet-set'}>Wallet : {context.hasWallet}</span>
                        }
                    </button>
                </div>
                <Link className="mt-3 mt-lg-0" to={"/"}>
                    <span className="site-logo"><Logo theme={context.theme}/></span>
                </Link>
            </section>
        </div>)
}

export default MobileHeader;
