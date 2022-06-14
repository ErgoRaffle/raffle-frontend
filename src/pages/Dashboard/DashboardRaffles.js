import React from "react";
import Raffle from "../../components/Raffle";
import loader from "../../assets/img/loader.svg";
import ThemeContext from "../../context";
import { PAGE_SIZE } from "../../statics";

class DashboardRaffles extends React.Component {
    state = {
        raffles: [],
        loading: false,
        loadedWallet: '',
        page: 0,
        loadedPage: -1,
        total: 0,
    }

    load_data = () => {
        const rafflesValid = this.context.hasWallet === this.state.loadedWallet && this.state.page === this.state.loadedPage;
        if (!this.state.loading && !rafflesValid && !this.props.showEmpty) {
            this.setState({loading: true});
            const walletAddress = this.context.hasWallet;
            const page = this.state.page
            this.props.urlLoader(walletAddress, page * PAGE_SIZE, PAGE_SIZE).then(({data}) => {
                this.setState({
                    raffles: data.items,
                    total: data.total,
                    loading: false,
                    loadedWallet: walletAddress,
                    loadedPage: page
                });
            })
        }
    }

    componentDidUpdate = () => {
        this.load_data();
    }

    componentDidMount = () => {
        this.load_data();
    }

    render = () => {
        return (
            <section id="all-your-donations-container" className="mt-header">
                <div className="container">
                    <h2 className="dashboard-title text-center mb-4">{this.props.title}</h2>
                    {this.state.loading ? (
                        <div className={'loading-wrapper'}><img src={loader} alt={'loading spinner'}/></div>
                    ) : (
                        <div id="all-your-donations" className="row g-4">
                            {this.state.raffles.length === 0 ? (
                                <p className="text-center mb-4">No Raffles Found</p>
                            ) : (
                                this.state.raffles.map((item, index) => (
                                    <div className="col-6 col-lg-3" key={index + '4000-elem'}>
                                        <Raffle raffle={item}/>
                                    </div>
                                )))}
                        </div>
                    )}
                </div>
            </section>
        )
    }
}

DashboardRaffles.contextType = ThemeContext;


export default DashboardRaffles
