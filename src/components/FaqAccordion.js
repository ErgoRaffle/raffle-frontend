import { memo } from "react";

const FaqAccordion = memo(({item, elemKey, parent}) => {
    return (<div className="accordion-item">
        <h2 className="accordion-header">
            <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#question-" + elemKey}
            >
                {item.question}
            </button>
        </h2>
        <div
            id={"question-" + elemKey}
            className="accordion-collapse collapse"
            data-bs-parent={'#' + parent}
        >
            <div className="accordion-body">
                {item.answer}
            </div>
        </div>
    </div>)
});

export default FaqAccordion;
