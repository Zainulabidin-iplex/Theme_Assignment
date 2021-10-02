
import React from 'react';
import './Client.css';

const Client = () => {
    return (
        <div className="client_container">
            <div className="client_wrap">
                <h1 className="client_heading">What My Client Says</h1>
                <p className="client_text1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div className="cr_countainer">
               <div className="client_review">
                  <div className="profile">
                    <div>
                        <img className="c_img1" src="Images/3.png"/></div>
                    <div>
                        <img className="c_img2" src="Images/22.png"/></div>
                    <div>
                        <img className="c_img3" src="Images/1.png"/></div>
                    <div>
                        <img className="c_img4" src="Images/1.png"/></div>
                    <div>
                        <img className="c_img5" src="Images/22.png"/></div>
                    <div>
                        <img className="c_img6" src="Images/3.png"/></div>
                </div>
                <div className="review">
                    <p className="client_text"><span className="c_icon">"</span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt is the most explicabo.<span className="c_icon">"</span> </p>
                    <h3 className="client_name">- Sara Smith</h3>
                    <p className="client_pos">CEO ABC Company</p>
                </div>
            </div>    
            </div>
        </div>    
    )
}

export default Client;