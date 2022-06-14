import CarouselElement from "./CarouselElement";

const BootstrapCarousel = ({ children }) => {
  return (<>
    <CarouselElement>
      {children}
    </CarouselElement>
  </>)
}

export default BootstrapCarousel;