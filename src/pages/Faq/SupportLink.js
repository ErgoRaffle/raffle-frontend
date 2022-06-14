import React, { useContext } from "react";
import ThemeContext from "../../context";
import { DEFAULT_SUPPORT_URL } from "../../statics";

const SupportLink = props => {
    const context = useContext(ThemeContext);
    const openSupportBot = () => {
        const support_url = context.info.supportUrl ? context.info.supportUrl : DEFAULT_SUPPORT_URL;
        window.open(support_url, "_blank")
    }
    return (
        <div>
            <div className="submit-btn-container text-center">
                <button type="Submit" className="btn support-submit mt-5" onClick={openSupportBot}>
                    Go to Support Bot in Discord
                </button>
            </div>
        </div>
    )
}


export default SupportLink
