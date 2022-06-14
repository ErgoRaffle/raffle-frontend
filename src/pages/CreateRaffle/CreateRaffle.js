import React from "react";
import Title from "../../components/Title";
import ThemeContext from "../../context";
import MultiStepBar from "../../components/multi-step/MultiStepBar";
import MultiStepLeft from "../../components/multi-step/MultiStepLeft";
import RaffleTitle from "./steps/RaffleTitle";
import CreateButtons from "./steps/CreateButtons";
import RaffleDescription from "./steps/RaffleDescription";
import RafflePhotos from "./steps/RafflePhotos";
import RaffleAddress from "./steps/RaffleAddress";
import RaffleDonationGoal from "./steps/RaffleDonationGoal";
import RaffleTicketPrice from "./steps/RaffleTicketPrice";
import RaffleDeadline from "./steps/RaffleDeadline";
import RaffleShare from "./steps/RaffleShare";
import RecaptchaAndAgree from "../../webparts/Raffle/RecaptchaAndAgree";
import FinishModal from "../../webparts/Modal/finish-modal/FinishModal";
import * as constant from '../../statics';
import { getRaffleStatus, postRaffle } from "../../service/raffle.service";
import { toast } from "react-toastify";
import TermsModal from "../../webparts/Modal/TermsModal";

let interval_item = null;

class CreateRaffle extends React.Component {
    state = {
        step: 0,
        subStep: 0,
        stepValid: false,
        title: '',
        description: '',
        photo: [],
        charity: '',
        goal: '',
        ticketPrice: '',
        deadline: '',
        share: '',
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
            title: "Raffle’s Specifications",
            subs: [
                {
                    title: "Title",
                    render: () => <RaffleTitle
                        setValid={this.set_valid}
                        init={this.state.title}
                        setValue={value => this.setState({title: value})}/>

                }, {
                    title: "Description",
                    render: () => <RaffleDescription
                        setValid={this.set_valid}
                        init={this.state.description}
                        setValue={value => this.setState({description: value})}/>

                }, {
                    title: "Upload Photos",
                    render: () => <RafflePhotos
                        setValid={this.set_valid}
                        init={this.state.photo}
                        setValue={value => this.setState({photo: value})}/>

                }, {
                    title: "Charity Address",
                    render: () => <RaffleAddress
                        init={this.state.charity}
                        label="Set a Charity Address."
                        setValue={value => this.setState({charity: value})}
                        setValid={this.set_valid}/>
                    // }, {
                    //     title: "Wallet Address",
                    //     render: () => <RaffleAddress
                    //         init={this.context.hasWallet}
                    //         label="Confirm Your Wallet Address."
                    //         setValue={value => this.setContext({wallet: value})}
                    //         setValid={this.set_valid}/>
                },
            ],
        }, {
            title: "Donation Goal",
            subs: [
                {
                    title: "Donation Goal",
                    render: () => <RaffleDonationGoal
                        setValue={value => this.setState({goal: value})}
                        setValid={this.set_valid}
                        init={this.state.goal}/>
                }, {
                    title: "Ticket Price",
                    render: () => <RaffleTicketPrice
                        setValid={this.set_valid}
                        setValue={value => this.setState({ticketPrice: value})}
                        init={this.state.ticketPrice}/>
                }, {
                    title: "Deadline",
                    render: () => <RaffleDeadline
                        setValue={value => this.setState({deadline: value})}
                        setValid={this.set_valid}
                        init={this.state.deadline}/>
                }, {
                    title: "Distribution",
                    render: () => <RaffleShare
                        setValue={value => this.setState({share: value})}
                        setValid={this.set_valid}
                        init={this.state.share}/>
                },
            ]
        }, {
            title: "Agreement",
            render: () => <RecaptchaAndAgree
                init={this.state.recaptcha}
                setValid={this.set_valid}
                showTerms={() => this.setState({showTerms: true})}
                setValue={recaptcha => this.setState({recaptcha: recaptcha})}/>
        }
    ]

    set_valid = valid => {
        if (this.state.stepValid !== valid) {
            this.setState({stepValid: valid})
        }
    }
    render_sub_state = () => {
        const step = this.MultiStep[this.state.step]
        if (step.subs) {
            return step.subs[this.state.subStep].render()
        }
        return step.render()
    }
    is_last_step = () => {
        if (this.state.step === this.MultiStep.length - 1) {
            const step = this.MultiStep[this.state.step];
            if (step.subs) return this.state.subStep === step.subs.length - 1
            return true
        }
        return false
    }
    step_forward = () => {
        if (this.state.stepValid) {
            const step = this.MultiStep[this.state.step];
            if (!step.subs || step.subs.length - 1 === this.state.subStep) {
                if (this.state.step === this.MultiStep.length - 1) {
                    this.create_raffle();
                } else {
                    this.setState(state => ({...state, step: state.step + 1, subStep: 0}));
                }
            } else {
                this.setState(state => ({...state, subStep: state.subStep + 1}))
            }
        }
    }
    step_backward = () => {
        if (this.state.step !== 0 || this.state.subStep !== 0) {
            if (this.state.subStep === 0) {
                this.setState(state => {
                    const step = this.MultiStep[state.step - 1]
                    return {...state, step: this.state.step - 1, subStep: step.subs ? step.subs.length - 1 : 0}
                })
            } else {
                this.setState(state => ({...state, subStep: state.subStep - 1}));
            }
        }
    }
    render_buttons = () => {
        return <CreateButtons
            step_backward={this.step_backward}
            step_forward={this.step_forward}
            valid={this.state.stepValid}
            is_last={this.is_last_step()}
            is_first={this.state.step === 0 && this.state.subStep === 0}
        />
    }

    create_raffle = () => {
        postRaffle(
            this.state.title,
            this.state.charity,
            this.context.hasWallet,
            this.state.photo,
            Math.floor(Number(this.state.goal) * constant.ERG_FACTOR),
            Math.floor(Number(this.state.ticketPrice) * constant.ERG_FACTOR),
            Number(this.state.share),
            Number(this.state.deadline),
            this.state.description,
            this.state.recaptcha
        ).then(({data}) => {
            toast('Creation Performed!');
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
                getRaffleStatus(this.state.response.requestId).then(
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
        }).catch((e) => {
            try {
                toast(e.response.data.message);
            } catch (e) {
            }
        })
    }
    closeModal = () => {
        this.setState(state => ({...state, showTerms: false, response: {...state.response, show: false}}));
        if (interval_item) {
            clearInterval(interval_item);
        }
    }

    render = () => {
        const step_image = this.state.step === 0 ? "first-step-img" : "second-step-img";
        const sub_steps = this.MultiStep[this.state.step].subs
        return (
            <main>
                <Title title={'Ergo Raffle - Create Raffle'}/>
                <section id="create-raffle">
                    <div className="container mt-header">
                        <div className={`create-raffle-img-container text-center ${step_image}`}/>
                        <MultiStepBar
                            steps={this.MultiStep.map(item => item.title)}
                            active={this.state.step}
                            showStep={true}
                            title="Ready to Create a New Raffle?"/>
                        <div className="row pt-4">
                            {sub_steps ? (
                                <React.Fragment>
                                    <div className="col-md-4 col-xs-12">
                                        <MultiStepLeft
                                            active={this.state.subStep}
                                            steps={sub_steps.map(item => item.title)}/>
                                    </div>
                                    <div className="col-md-8 col-xs-12">
                                        {this.render_sub_state()}
                                        {this.render_buttons()}
                                    </div>
                                </React.Fragment>
                            ) : (
                                <div className="col-xs-8">
                                    {this.render_sub_state()}
                                    {this.render_buttons()}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <FinishModal {...this.state.response} stepTitle="Create Raffle Steps" close={this.closeModal}/>
                <TermsModal show={this.state.showTerms} close={this.closeModal}/>
            </main>
        )
    }
}

CreateRaffle.contextType = ThemeContext;

export default CreateRaffle;
