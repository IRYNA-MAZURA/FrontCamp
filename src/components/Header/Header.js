import React from 'react';
import Logo from "../Logo";
import Search from "../Search";

import './Header.css';

export const Header = () => {
    return (
        <header>
            <Logo/>
            <Search/>
        </header>
    )
};
