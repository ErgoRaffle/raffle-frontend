import React from "react";
import Raffle from "../../components/Raffle"
import { PIN_KEY } from "../../statics";
import { getSingleRaffle } from "../../service/raffle.service";
import loader from "../../assets/img/loader.svg";
import { getPinnedRaffles } from "../../utils/utils";

class PinnedRaffles extends React.Component {
    state = {
        loading: false,
        raffles: [],
        loaded: '',
    }
    load_data = async () => {
        const pinned = getPinnedRaffles();
        const pinnedStr = pinned.join(",")
        if(!this.state.loading && this.state.loaded !== pinnedStr){
            this.setState({loading: true});
            let raffles = []
            for(let raffleId of pinned){
                if(raffleId) {
                    let raffle = await getSingleRaffle(raffleId)
                    raffles.push(raffle.data)
                }
            }
            this.setState({
                raffles: raffles,
                loaded: pinned,
                loading: false
            })
        }
    }

    componentDidUpdate = () => {
        this.load_data().then(() => null)
    }

    componentDidMount = () => {
        this.load_data().then(() => null)
    }

    render = () => {
        const pinned = getPinnedRaffles()
        if(pinned.length === 0){
            return null
        }
        return (
            <section id="all-your-donations-container" className="mt-header">
                <div className="container">
                    <h2 className="dashboard-title text-center mb-4">Pinned Raffles</h2>
                    <div id="all-your-donations" className="row g-4">
                        {this.state.loading ? (
                            <div className={'loading-wrapper'}><img src={loader} alt={'loading spinner'}/></div>
                        ) : this.state.raffles.map((item, key) => (
                                <div className="col-6 col-lg-3" key={key + 12000 + ' - elem'}>
                                    <Raffle raffle={item}/>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>
        )
    }
}


export default PinnedRaffles;
