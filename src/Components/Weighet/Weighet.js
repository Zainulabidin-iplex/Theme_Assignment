import React from 'react';
import './Weighet.css';
import { FaFacebookSquare,FaInstagram,FaPinterestSquare, FaLinkedinIn,FaTwitterSquare } from "react-icons/fa";

const Weighet = () => {
    return (
        <div className="footer_countainer">
            <div className="footer_main">
                <h1 className="foo_heading">Portfolio</h1>
                <h3 className="link">About  |  Portfolio  |  Contact</h3>
                <p className="enum">NY / +1 123456 7890 / hello@graphics.studio.com</p>
                <div className="foo_icon">
                    <FaFacebookSquare className="ficon"/>
                    <FaInstagram className="ficon"/>
                    <FaPinterestSquare className="ficon"/>
                    <FaLinkedinIn className="ficon"/>
                    <FaTwitterSquare className="ficon"/>
                </div>
            </div>
            <div className="footer_text">
                <p className="copy_right">Copyright © 2019 Graphics Studio | All rights reserved</p>
            </div>
        </div>
    )
}

export default Weighet
