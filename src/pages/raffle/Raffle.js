import React from 'react';
import Title from '../../components/Title';
import { getSingleRaffle } from '../../service/raffle.service';
import Header from './Header';
import StatusInfo from './StatusInfo';
import IconBox from "./IconBox";
import Transactions from "./Transactions";
import Donation from "./donate/Donation";
import DonationHeader from "./donate/DonationHeader";
import Tickets from "./Tickets";
import ThemeContext from "../../context";
import ShareModal from "../../webparts/Modal/ShareModal";

class Raffle extends React.Component {
    state = {
        raffle: {}
    }

    componentDidMount = () => {
        getSingleRaffle(this.props.match.params.id).then(
            ({data}) => {
                this.setState({raffle: data});
            }
        )
    }

    render = () => {
        return (
            <React.Fragment>
                {this.state.raffle ? <Title title={'Ergo Raffle - ' + this.state.raffle.name}/> : null}
                <main>
                    <Header raffle={this.state.raffle}/>
                    <StatusInfo raffle={this.state.raffle}/>
                    <section id="raffle-icons" className="mt-5">
                        <div className="container">
                            <IconBox raffle={this.state.raffle}/>
                        </div>
                    </section>
                    {this.state.raffle && this.state.raffle.id ? (
                        <React.Fragment>
                            {this.state.raffle.status === 'active' ? (
                                <React.Fragment>
                                    <section id="ask-for-donation" className="mt-5">
                                        <div className="container">
                                            <DonationHeader raffle={this.state.raffle}/>
                                        </div>
                                    </section>
                                    <Donation ticketPrice={this.state.raffle.ticket.price} id={this.state.raffle.id}/>
                                    {this.context.hasWallet ? <Tickets id={this.state.raffle.id}/> : null}
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <Transactions status={this.state.raffle.status} id={this.state.raffle.id}/>
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    ) : null}
                </main>
            </React.Fragment>
        )
    }
}

Raffle.contextType = ThemeContext;

export default Raffle;
