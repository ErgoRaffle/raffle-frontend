import Day from "./Day";

const RemainingBox = ({raffle}) => {
    return (
        <div className="remain-box mt-lg-5">
            <p className="remaining-days">
                <Day deadline={raffle.deadline} add_suffix={true}/>
            </p>
        </div>
    )
}

export default RemainingBox;
