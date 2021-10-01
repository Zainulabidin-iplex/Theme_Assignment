import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header_countainer">
            <div className="header_wrapper">
                <div className="header_logo">
                    <img className="logo_image" src="Images/logo.png"/>
                </div>
                <div classsName="header_des_img">
                    <img className="header_image" src="Images/headerimg.png"/>
                </div>
                <div className="page_name">
                    <ul>
                        <li><a className="btn_li" href="#about">About</a></li>
                        <li><a className="btn_li"href="#portfolio">Portfolio</a></li>
                        <li><a className="btn_li" href="#contact">Contact</a></li>
                        <li><a className="btn_get" href="#">Get Started</a></li>
                    </ul>
                </div>
            </div>        
        </div>
    )
}

export default Header;
