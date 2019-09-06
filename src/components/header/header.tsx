import React from 'react';

import countRenders from '../../utils/count-renders';

import './header.css';
import logo from './logo.svg';

import Time from '../time';
import HeaderInput from './header-input';

export default function Header() {
    countRenders(Header);

    return <header className="header">
        <HeaderInput/>

        <img src={logo} className="header__logo" alt="logo" />

        <span className="header__time">
            <Time/>
        </span>
    </header>
}
