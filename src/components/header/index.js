import React from 'react';
import {CgBox} from 'react-icons/cg';
import {AiFillGithub} from 'react-icons/ai';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="header">
                <div className='header-logo'>Xpenser <CgBox/> </div>
            </div>
            <div className="header-button">
                <a href="/">
                    <AiFillGithub/>
                </a>
            </div>
        </div>
    )
}

export default Header
