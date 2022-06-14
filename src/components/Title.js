import { memo } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Title = ({title}) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

export default Title;
