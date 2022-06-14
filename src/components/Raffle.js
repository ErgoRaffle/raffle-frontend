import { Link } from "react-router-dom";
import defaultDark from '../assets/img/default-dark.png'
import defaultLight from '../assets/img/default-light.png'
import ErgProgressBar from "./ErgProgressBar";
import RemainingBox from "./RemainingBox";
import { useContext } from "react";
import ThemeContext, { DARK_THEME } from "../context";
import HtmlToReactParser from  'html-to-react';

const Raffle = ({raffle}) => {
    const htmlToReactParser = new HtmlToReactParser.Parser();
    const context = useContext(ThemeContext);
    let raffle_class = "";
    let picture = context.theme === DARK_THEME  ? defaultDark : defaultLight;
    if(raffle) {
        raffle_class = ((raffle.status === 'succeed') ? " raffle-success" : (raffle.status === 'failed') ? "raffle-unsuccess" : "")
        picture = Array.isArray(raffle.picture) && raffle.picture.length > 0 ? raffle.picture[0] : picture
    }
    const description = raffle && raffle.description ? raffle.description.replace(/<[^>]+>/g, ' ') : ""
    console.log(description)
    return (
        <Link className="raffle-card-link" to={'/raffle/show/' + (raffle && raffle.id)}>
        <div className={`card raffle-card ${raffle_class}`}>
            <div className="card-body">
                <div className="raffle-img-container">
                    <div className="raffle-image-inner">
                        <img src={picture} className='full-width' alt=""/>
                    </div>
                </div>
                <h3 className="raffle-title mt-3 mb-3 text-center">
                    {raffle && raffle.name}
                </h3>
                <p className="raffle-text">
                    {description}
                </p>
                <RemainingBox raffle={raffle}/>
                <ErgProgressBar raffle={raffle}/>
            </div>
        </div>
    </Link>)
};

export default Raffle;
