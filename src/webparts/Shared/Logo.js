import React, { useContext } from 'react'
import ThemeContext, { DARK_THEME } from "../../context";
import logo from "../../assets/img/logo.png";
import { IS_BETA } from "../../statics";
import logoBeta from "../../assets/img/logo-beta.png";
import logoBetaDark from "../../assets/img/logo-dart-beta.png";
import logoDark from "../../assets/img/logo-dark.png";

const Logo = ({theme}) => {
    let siteLogo = logo;
    if (IS_BETA) {
        siteLogo = logoBeta;
    }
    if (theme === DARK_THEME) {
        if (IS_BETA) {
            siteLogo = logoBetaDark;
        } else {
            siteLogo = logoDark;
        }
    }
    console.log(theme);
    return (
        <img width={194} src={siteLogo} alt={'ergoraffle'}/>
    )
}


export default Logo;
