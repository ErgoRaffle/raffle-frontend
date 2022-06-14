import React, { useState } from "react";

const CircleTabs = ({tabs, changeTabContent, activeTab}) => {
    const changeTab = (tabIndex) => {
        changeTabContent(tabIndex)
    }
    return (
        <React.Fragment>
            {
                tabs.map((item, key) => (
                        <button key={key + '-circle-tab'} type="button"
                                onClick={() => changeTab(item.value)}
                                className={"btn btn-outline-raffle" + (activeTab === item.value ? " btn-raffle-active" : "")}
                        >
                            {item.label}
                        </button>
                    )
                )
            }
        </React.Fragment>)
};

export default CircleTabs;
