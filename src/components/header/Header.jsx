import React from 'react';
import CTA from './CTA';
import './header.css'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm Dung</h5>
                <h1>Welcome to my portfolio</h1>
                <h5 className='text-light'>Front-End Developer (main) / Fullstack Developer</h5>
                <CTA/>
                <HeaderSocials></HeaderSocials>
                <div className="me">
                    <img src={ME} alt="My avatar" />
                </div>
                <a className='scroll__down' href="#contact">Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;