import React from "react";

const Tabs = ({tabs, activeTab, setActiveTab}) => {
    return (
        <ul className="raffle-links nav justify-content-center">
            {
                tabs.map(
                    (item, key) => (
                        <li key={item + key + 'tabs'} className="raffle-item nav-item">
                            <span onClick={() => setActiveTab(key)}
                                  className={activeTab === key ? "raffle-link nav-link active-link" : "raffle-link nav-link"}>
                                {item}
                            </span>
                        </li>
                    )
                )
            }
        </ul>
    )
}

export default Tabs;
