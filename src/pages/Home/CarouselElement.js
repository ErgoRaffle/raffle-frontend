import BootsrapCarouselNavigation from "./BootstrapCarouselNavigation";

const CarouselElement = ({children}) => {
    return (
        <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel">
            <div className="carousel-inner">
                {children}
            </div>
            <BootsrapCarouselNavigation/>
        </div>
    )
}

export default CarouselElement;
