import React from "react";
import { ERG_FACTOR } from "../statics";


const Erg = ({ erg, shouldDisplay }) => {
    return (<>{erg / ERG_FACTOR}{shouldDisplay ? ' ERG' : ''}</>)
};

export default Erg;
