import React from 'react';
import {CgBox} from 'react-icons/cg';
import {AiFillGithub} from 'react-icons/ai';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="header">
                <div className='header-logo'>Xpenser <CgBox className='box-logo' /> </div>
                <div className="header-button">
                <a 
                    href="https://github.com/SAIKUMAR124/expense-tracker"
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    <AiFillGithub className='git-icon' />Star
                </a>
            </div>
            </div>
            
        </div>
    )
}

export default Header
