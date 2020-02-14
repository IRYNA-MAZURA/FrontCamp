import React from "react";
import {Link} from "react-router-dom";

import './Logo.css';

export const Logo = () => {
    return (       
        <div className="logo">
            <Link to="/" className="logo-link"><strong>netflix</strong>roulete</Link>
        </div>             
    )
};
