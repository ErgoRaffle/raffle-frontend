import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext, { DARK_THEME } from "../context";
import handHeartDark from "../assets/img/hand-heart-dark.png";
import handHeart from "../assets/img/hand-heart.png";
import defaultDark from '../assets/img/default-dark.png'
import defaultLight from '../assets/img/default-light.png'
import HtmlToReactParser from 'html-to-react';

const Carousel = ({raffle}) => {
    const context = useContext(ThemeContext);
    const htmlToReactParser = new HtmlToReactParser.Parser();
    let picture = context.theme === DARK_THEME ? defaultDark : defaultLight;
    return (<Link to={raffle.status === 'active' ? '/raffle/donate/' + raffle.id : '/raffle/show/' + raffle.id}>
        <div
            className="carousel-slide-container d-flex flex-column flex-lg-row"
        >
            <div className="slide-left-col">
                <div className="slide-img-container">
                    <img
                        src={Array.isArray(raffle.picture) && raffle.picture.length > 0 ? raffle.picture[0] : picture}
                        className="d-block w-100"
                        alt={raffle.name}
                    />
                </div>
            </div>
            <div className="slide-right-col ps-lg-3">
                <h3>What's the story</h3>
                <p className="slide-text">
                    {htmlToReactParser.parse(raffle.description)}
                    {/*{raffle.description}*/}
                </p>
                <div className="ic-container d-flex g-5 mt-4">
                    <div className="slider-ic-box">
                        <span className="slider-icon raffle-icon">
                            <span className="icon-new-piggy slider-icon slider-icon1"/>
                        </span>
                        <p className="ic-text mt-2">{Math.ceil(raffle.erg / raffle.goal * 100)}% Funded</p>
                    </div>
                    <div className="slider-ic-box">
                        <span className="slider-icon raffle-icon">
                            <span className="icon-new-hand slider-icon slider-icon2"/>
                        </span>
                        <p className="ic-text mt-2">{raffle.donatedPeople} Backers</p>
                    </div>
                </div>
            </div>
        </div>
    </Link>)
};

export default Carousel;
