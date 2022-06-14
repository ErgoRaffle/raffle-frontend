import React from 'react';
import Carousel from '../../components/Carousel';
import BootstrapCarousel from './BootstrapCarousel';

const CarouselBar = ({raffles}) => {
    return (<section className="carousel-section">
        <div className="container">
            <BootstrapCarousel>
                {
                    raffles.map((item, key) => (
                            <div key={key + '-carousel-key'}
                                 className={key === 0 ? "carousel-item active" : "carousel-item"}>
                                <Carousel raffle={item}/></div>
                        )
                    )
                }
            </BootstrapCarousel>
        </div>
    </section>)
};

export default CarouselBar;
