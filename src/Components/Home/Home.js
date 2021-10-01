import React from 'react';
import './Home.css';
import { FaFacebookSquare,FaInstagram,FaPinterestSquare, FaLinkedinIn,FaTwitterSquare } from "react-icons/fa";

const Home = () => {
    return (
        <div className="home_container">
            <div className="home_main">
                <div className="home_left">
                    <p className="text_1">Hello, I am</p>
                    <h1 className="home_name"><b>Mark Reccardo</b></h1>
                    <p className="text_2">A young <span className="ui_color">UI/UX</span> designer with crazy for mobile & mobile design.<br/><br/>Find Me on</p>
                    <FaFacebookSquare className="icon"/>
                    <FaInstagram className="icon"/>
                    <FaPinterestSquare className="icon"/>
                    <FaLinkedinIn className="icon"/>
                    <FaTwitterSquare className="icon"/>
                    <div className="home_btn">
                    <button className="hire_btn">Hire Me</button>
                    <button className="portfolio_btn">Portfolio</button>
                    </div>
                </div>
                <div className="home_right">
                    <img className="about_image" src="Images/zzz.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Home
