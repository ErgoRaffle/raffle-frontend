import React from "react";
import ThemeContext from "../context";
import RefundAddress from "./RefundAddress";
import Captcha from "./Captcha";
import { toast } from "react-toastify";
import { postRefund } from "../service/raffle.service";

class RaffleRefund extends React.Component {
    state = {
        recaptcha: "",
        refundAddress: "",
        txId: "",
        success: "",
        recaptchaReset: false,
    }

    setCaptcha = recaptcha => {
        this.setState({recaptcha: recaptcha})
    }
    handleClick = () => {
        this.setState({recaptchaReset: true})
        postRefund(this.context.hasWallet, this.state.refundAddress, this.state.recaptcha).then(
            ({data}) => {
                if (data.success) {
                    toast('Refund Performed!');
                    this.setState({txId: data.txId})
                }
            }).catch((e) => {
            try {
                toast.warn(e && e.response && e.response.data && e.response.data.message);
            } catch (e) {
            }
        })
    }

    render = () => {
        return (
            <section id="all-your-donations-container" className="mt-header">
                <div className="row pt-4">
                    <div className="col-6 offset-3">
                        <h2 className="dashboard-title text-center mb-4">Refund Corrupted payments</h2>
                        <RefundAddress
                            setRefund={(addr) => {
                                this.setState({refundAddress: addr})
                            }}
                            refundAddress={this.state.refundAddress}
                        />

                        <div className="xs-12 verify-recaptcha text-center mt-3">
                            <Captcha
                                reset={this.state.recaptchaReset}
                                setReset={() => this.setState({recaptchaReset: false})}
                                verifyCallback={(recaptcha) => this.setCaptcha(recaptcha)}
                            />
                        </div>
                        <div className="col text-center">

                            <button
                                className="btn set-wallet mt-3"
                                onClick={this.handleClick}
                            >
                                Refund
                            </button>
                        </div>
                        {(this.state.txId === "") ? null : <div className="raffle-id-box bordered-field mt-3">
                            <p>
                                Transaction ID:
                                <span className="raffle-id-text"> {this.state.txId}</span>
                            </p>
                        </div>}

                    </div>
                </div>
            </section>
        )
    }
}

RaffleRefund.contextType = ThemeContext;


export default RaffleRefund
