import staticText from "../../statics";
import Day from "../../components/Day";

const EstimationBox = ({deadline}) => {
    if(isNaN(deadline)) {
        return <div className="col-md-6 mt-3">No Estimation</div>
    }
    return (
        <div className="col-6 mt-3">
            Estimation: Almost <Day add_suffix={false} remaining_block={deadline}/>
        </div>
    )
}

export default EstimationBox;
