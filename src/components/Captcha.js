import { useContext, useRef } from "react";
import ThemeContext from "../context";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = ({reset, setReset, verifyCallback}) => {
    const context = useContext(ThemeContext);
    const recaptchaRef = useRef(null);
    if (context.info.required) {
        if (reset) {
            setReset(false)
            if (recaptchaRef.current !== null) {
                recaptchaRef.current.reset()
            }
        }
        return <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={context.info.pubKey}
            onChange={(recaptcha) => {
                verifyCallback(recaptcha);
            }} onExpired={() => {
            verifyCallback('');
        }}/>
    } else {
        return null
    }

}

export default Captcha;
