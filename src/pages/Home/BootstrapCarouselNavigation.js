const BootsrapCarouselNavigation = () => {
    return (<>
        <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
        >
            <span className="carousel-control-prev-icon" aria-hidden="true"/>
            <span className="visually-hidden">Previous</span>
        </button>
        <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
        >
            <span className="carousel-control-next-icon" aria-hidden="true"/>
            <span className="visually-hidden">Next</span>
        </button>
    </>)
}

export default BootsrapCarouselNavigation;
