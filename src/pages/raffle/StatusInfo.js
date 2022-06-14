import RaffleDestinationInfo from "./DestinationInfo";
import TotalRaisedMoney from "./TotalRaiseMoney";

const StatusInfo = ({raffle}) => {

    return (
        <section id="raffle-details">
            <div className="container">
                <div className="row g-1 g-md-2 align-items-center justify-content-between">
                    <RaffleDestinationInfo raffle={raffle}/>
                </div>
                {raffle.status === 'succeed' || raffle.status === 'failed' ? (
                    <div id="total-raised"
                         className={"text-center " + (raffle.status === 'succeed' ? "raffle-successful-total" : "raffle-unsuccessful-total")}>
                        <TotalRaisedMoney raffle={raffle}/>
                    </div>
                ) : null}
            </div>
        </section>
    )
}

export default StatusInfo;
