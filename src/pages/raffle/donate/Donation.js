import React from "react";
import RaffleAddress from "../../CreateRaffle/steps/RaffleAddress";
import RecaptchaAndAgree from "../../../webparts/Raffle/RecaptchaAndAgree";
import MultiStepBar from "../../../components/multi-step/MultiStepBar";
import FinishModal from "../../../webparts/Modal/finish-modal/FinishModal";
import TermsModal from "../../../webparts/Modal/TermsModal";
import CreateButtons from "../../CreateRaffle/steps/CreateButtons";
import ThemeContext from "../../../context";
import DonationTicketCount from './DonateTicketCount';
import { donateRaffle, getRaffleDonationStatus, getRaffleStatus } from "../../../service/raffle.service";
import { toast } from "react-toastify";


let interval_item = null;

class Donation extends React.Component {
    state = {
        step: 0,
        stepValid: true,
        donation: 0,
        recaptcha: '',
        showTerms: false,
        response: {
            address: '',
            amount: 0,
            deadline: 0,
            requestId: 0,
            show: false,
            start: 0,
            status: ''
        }
    }
    MultiStep = [
        {
            title: "Wallet Address",
            render: () => <RaffleAddress
                init={this.context.hasWallet}
                label="What is Your Wallet Address?"
                setValue={value => this.context.setHasWallet(value)}
                setValid={this.set_valid}/>,
        }, {
            title: "Donation Amount",
            render: () => <DonationTicketCount
                init={this.state.donation}
                setValid={this.set_valid}
                ticketPrice={this.props.ticketPrice}
                setValue={value => this.setState({donation: value})}/>
        }, {
            title: "Agreement",
            render: () => <RecaptchaAndAgree
                init={this.state.recaptcha}
                setValid={this.set_valid}
                showTerms={() => this.setState({showTerms: true})}
                setValue={recaptcha => this.setState({recaptcha: recaptcha})}/>
        }
    ]

    donate = () => {
        donateRaffle(this.props.id, this.context.hasWallet, this.state.donation, this.state.recaptcha).then(
            ({data}) => {
                toast('Donation Performed!');
                this.setState({
                    response: {
                        address: data.address,
                        deadline: data.deadline,
                        amount: data.erg,
                        requestId: data.requestId,
                        show: true,
                        status: 'waiting',
                        start: Date.now(),
                    }
                });
                interval_item = setInterval(() => {
                    getRaffleDonationStatus(this.props.id, this.state.response.requestId).then(
                        ({data}) => {
                            this.setState(state => ({
                                ...state,
                                response: {
                                    ...state.response,
                                    status: data.status
                                }
                            }))
                        }
                    )
                }, 10000);
            }
        ).catch((e) => {
            try {
                toast(e && e.response && e.response.data && e.response.data.message);
            } catch (e) {
            }
        })
    }

    step_forward = () => {
        if (this.state.stepValid) {
            if (this.state.step === this.MultiStep.length - 1) {
                this.donate();
            } else {
                this.setState(state => ({...state, step: state.step + 1}));
            }
        }
    }
    step_backward = () => {
        if (this.state.step !== 0) {
            this.setState(state => ({...state, step: state.step - 1}))
        }
    }
    set_valid = valid => {
        if (this.state.stepValid !== valid) {
            this.setState({stepValid: valid})
        }
    }

    closeModal = () => {
        this.setState(state => ({...state, showTerms: false, response: {...state.response, show: false}}));
        if (interval_item) {
            clearInterval(interval_item);
        }
    }

    render = () => {
        const step = this.MultiStep[this.state.step]
        return (
            <main>
                <section id="create-raffle">
                    <div className="container mt-header">
                        <MultiStepBar
                            steps={this.MultiStep.map(item => item.title)}
                            active={this.state.step}
                            showStep={true}
                            title="Get Your Tickets!"/>
                        <div className="row pt-4">
                            <div className="col-8 offset-2">
                                {step.render()}
                                <CreateButtons
                                    step_backward={this.step_backward}
                                    step_forward={this.step_forward}
                                    valid={this.state.stepValid}
                                    is_last={this.state.step === this.MultiStep.length - 1}
                                    is_first={this.state.step === 0}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <FinishModal {...this.state.response} stepTitle="Create Raffle Steps" close={this.closeModal}/>
                <TermsModal show={this.state.showTerms} close={this.closeModal}/>
            </main>
        )
    }
}

Donation.contextType = ThemeContext;

export default Donation;
