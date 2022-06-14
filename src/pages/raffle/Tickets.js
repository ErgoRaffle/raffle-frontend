import React from "react";
import RaffleTicket from "../../webparts/Raffle/RaffleTicket";
import { getYourActiveRaffleTickets } from "../../service/raffle.service";
import { PAGE_SIZE } from "../../statics";
import ThemeContext from "../../context";
import loader from "../../assets/img/loader.svg";
import { toast } from "react-toastify";

class Tickets extends React.Component {
    state = {
        transactions: [],
        loading: false,
        page: 0,
        loadedPage: -1,
        loadedAddress: '',
        total: 0,
    }

    fetch_data = () => {
        const transactionValid = this.state.loadedPage === this.state.page && this.state.loadedAddress === this.context.hasWallet;
        if (!this.state.loading && !transactionValid && this.context.hasWallet) {
            const page = this.state.page;
            const walletAddress = this.context.hasWallet
            this.setState({loading: true})
            console.log(walletAddress);
            getYourActiveRaffleTickets(this.props.id, walletAddress).then(response => {
                this.setState({
                    transactions: response.data.items,
                    loading: false,
                    loadedPage: page,
                    total: response.data.total,
                    loadedAddress: walletAddress
                });
            }).catch(exp => {
                toast(exp.message);
                setTimeout(() => this.setState({loading: false}), 10000)

            })
        }
    }

    componentDidUpdate = () => {
        this.fetch_data();
    }

    componentDidMount = () => {
        this.fetch_data();
    }

    prevPage = () => {
        if (this.state.page > 0) {
            this.setState(state => ({...state, page: state.page - 1}))
        }
    }
    nextPage = () => {
        if (this.state.page < Math.ceil(this.state.total / PAGE_SIZE) - 1) {
            this.setState(state => ({...state, page: state.page + 1}))
        }
    }

    render() {
        return (
            <section id="your-tickets" className="my-5">
                <div className="container">
                    <div className="your-tickets-box text-center p-3">
                        {window.localStorage.getItem('wallet') !== null ? this.state.loading ? (
                            <div className={'loading-wrapper'}><img src={loader} alt={'loading spinner'}/></div>
                        ) : (
                            <React.Fragment>
                                <h3 className="your-tickets-title mt-3">
                                    {this.state.transactions.length === 0 ? "No Tickets Yet" : "Your Tickets"}
                                </h3>
                                {this.state.transactions.map((item, key) => <RaffleTicket
                                    transaction={item}
                                    key={item.id + key + '-transaction-raffle'}/>)}
                            </React.Fragment>
                        ) : null}
                    </div>
                </div>
            </section>
        )
    }
}
Tickets.contextType = ThemeContext;

export default Tickets;
