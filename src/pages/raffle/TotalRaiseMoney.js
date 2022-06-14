import Erg from "../../components/Erg";

const TotalRaisedMoney = ({ raffle }) => {
    return (
        <p>
            Total Raised Money:&nbsp;
            <span className="total-raised">
                <Erg erg={(raffle.ticket && raffle.ticket.erg) || 0} shouldDisplay={true} />
            </span>
        </p>)
}

export default TotalRaisedMoney;
