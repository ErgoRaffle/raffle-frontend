import staticText from "../statics";
import ErgDisplay from "./ErgDisplay";

const ErgProgressBar = ({raffle}) => {
    const fillPercent = () => {
        return (parseFloat((!isNaN(raffle.erg) ?
            (raffle.erg / staticText.ERG_SCALE) / (raffle.goal / staticText.ERG_SCALE) :
            (((raffle && raffle.ticket && raffle.ticket.erg)) / raffle.goal)) * 100))
    }
    return (
        <div className="progress-container mb-5">
            <div className="progress-bar" style={{width: fillPercent() + '%'}}/>
            <div className="raised" style={{textAlign: "center"}}>
                <ErgDisplay raffle={raffle}/>
            </div>
        </div>
    )
}

export default ErgProgressBar;
