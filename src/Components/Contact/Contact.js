import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
            <div className="contact_main">
                <h1 className="con_heading">Let’s Make Something<br/> Great Together</h1>
                <p className="con_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                        ut labore et t enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div className="filed">
                <input className="filed1" type="text" placeholder="Name" />
                <input className="filed1" type="text" placeholder="Email" />
                <input className="filed1" type="text" placeholder="Phone#" />
                <input className="filed1" type="text" placeholder="Budget" />
                <input className="filed2" type="text" placeholder="Message" />
                <button className="hiree_btn">Hire Me</button>
            </div>
        </div>
    )
}

export default Contact;
