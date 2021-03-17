import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <span className="name">
                Inshorts clone made by -{" "}
                <a href="">

                </a>
            </span>
            <hr style={{width:"90%"}}/>
            <div className="iconContainer">
                <a href="">
                <i className="fab fa-instagram-square"></i>
                </a>
                <a href="">                
                <i className="fab fa-facebook-square"></i> 
                </a>
                <a href="">
                <i className="fab fa-twitter-square"></i>
                </a>
            </div>
            
        </div>
    )
}

export default Footer
