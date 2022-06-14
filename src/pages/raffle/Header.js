import React from 'react';
import DetailInfo from "./DetailInfo"
import Gallery from "./Gallery"

const Header = ({raffle}) => {
    return (
        <section id="raffle-intorduction" className="p-2 p-lg-5 mb-4 mt-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <Gallery raffle={raffle}/>
                    </div>
                    <div className="col-lg-7 raffle-intorduction-right">
                        <DetailInfo raffle={raffle}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;
