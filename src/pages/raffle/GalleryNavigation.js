import React from "react";

const GalleryNavigation = ({row}) => {
    if (row === 0)
        return <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={row}
            className="active"
            aria-current="true"
            aria-label={"Slide " + row}/>
    return <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={row}
        aria-label={"Slide " + row}/>
};

export default GalleryNavigation;
