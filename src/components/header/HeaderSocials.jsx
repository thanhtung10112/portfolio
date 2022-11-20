import React from 'react';
import {BsLinkedin, BsFacebook} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/ho%C3%A0ng-d%C5%A9ng-tr%C6%B0%C6%A1ng-a40a86185/" target='_blank' rel='noreferrer' ><BsLinkedin/></a>
            <a href="https://github.com/thdungwithbugs" target='_blank' rel='noreferrer'><FaGithub/></a>
            <a href="https://www.facebook.com/dung.hoangtruong.5/" target='_blank' rel='noreferrer'><BsFacebook/></a>
        </div>
    );
};

export default HeaderSocials;