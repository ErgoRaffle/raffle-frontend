import { useContext, useState } from "react";
import ThemeContext from "../../context";
import { Link } from "react-router-dom";
import Captcha from "../../components/Captcha";


const RecaptchaAndAgree = ({setValue, setValid, init, showTerms}) => {
    const context = useContext(ThemeContext);
    const [termsAccepted, setTermsAccepted] = useState(false)
    const handleTerms = (e) => {
        setTermsAccepted(e.target.checked);
    }

    function verifyCallback(value) {
        setValue(value)
    }
    setValid(termsAccepted && (!context.info.required || !!init))
    return (
        <div className="row">
            <h3 className="step-title text-center">Read the Terms of Use.</h3>
            <div className="row accept-terms">
                <div
                    className="my-5 col-xs-12 verify-terms d-flex align-items-center justify-content-center">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value="on"
                            checked={termsAccepted}
                            id="flexCheckDefault"
                            onChange={handleTerms}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            I agree to the <a onClick={() => showTerms()} className="terms-link cursor-pointer"> terms of use</a>
                        </label>
                    </div>
                </div>
                <div className="xs-12 verify-recaptcha text-center">
                    <Captcha verifyCallback={(response) => verifyCallback(response)}/>
                </div>
            </div>
        </div>
    )
};

export default RecaptchaAndAgree;
