import React from 'react'
import './About.css';

const About = () => {
    return (
        <div id="about">
            <div className="about_main">
                <div className="about_left">
                    <h1 className="about_heading">About Me</h1>
                    <p className="about_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat<br/><br/>
                                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button className="cv_btn">Download CV</button>
                </div>
                <div className="about_right">
                    <img className="about_image" src="Images/aboutimg.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default About
