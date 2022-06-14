import React from "react";
import MultiStepBar from "../components/multi-step/MultiStepBar";
import MultiStepLeft from "../components/multi-step/MultiStepLeft";

const steps = [
    "Raffle's Specifications",
    "Donation Goal",
    "Agreement",
]
const Test = () => {
    return (
        <div className="container mt-header">
            <section>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <MultiStepBar title="Ready to Create a New Raffle?" steps={steps} active={0} showStep={true}/>
                <MultiStepLeft steps={steps} active={0}/>
            </section>
        </div>
    )
}

export default Test
