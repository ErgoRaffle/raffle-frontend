import React, { useContext, useState } from 'react';
import defaultImg from '../../assets/img/default.jpg';
import Lightbox from 'lightbox-react';
import GalleryNavigation from './GalleryNavigation';
import defaultDark from '../../assets/img/default-dark.png'
import defaultLight from '../../assets/img/default-light.png'
import 'lightbox-react/style.css';
import ThemeContext, { DARK_THEME } from "../../context"; // This only needs to be imported once in your app

const Gallery = ({raffle}) => {
    const context = useContext(ThemeContext);
    let picture = context.theme === DARK_THEME  ? defaultDark : defaultLight;
    const images = raffle.picture && raffle.picture.length > 0 ? raffle.picture : [picture];
    const [isOpen, setIsOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);

    const pictures = (raffle.picture && raffle.picture.length > 0 ? raffle.picture : [picture])
    return (
        <React.Fragment>
            <div id="carouselExampleIndicators" className={"carousel slide " + (raffle.status === 'succeed' ? 'raffle-success-image' : raffle.status === 'failed' ? 'raffle-unsuccess-image' : '')} data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {pictures.map((item, key) => (
                        <span key={item + key + '-8000-arrows'}>
                            <GalleryNavigation row={key}/>
                        </span>
                    ))}
                </div>
                <div className={"carousel-inner"}>
                    {pictures.map((item, key) => (
                        <div className={key === 0 ? "carousel-item active" : "carousel-item"}
                             key={key + item + '12000-gallery-image-item'}>
                            <div
                                onClick={() => {
                                    setIsOpen(true)
                                }}
                                className={raffle.status === 'succeed' ? 'raffle-success' : raffle.status === 'failed' ? 'raffle-unsuccess' : ''}>
                                <div className='raffle-img-container no-stamp'>
                                    <div className={'raffle-image-inner'}>
                                        <img
                                            src={item || defaultImg}
                                            className="d-block w-100"
                                            alt={raffle.name}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isOpen ?
                <Lightbox
                    mainSrc={images[startIndex]}
                    nextSrc={images[(startIndex + 1) % images.length]}
                    prevSrc={images[(startIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setStartIndex((startIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setStartIndex((startIndex + 1) % images.length)}
                />
                : null}
        </React.Fragment>)
}

export default Gallery;
