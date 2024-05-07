import React from "react";
import logo from '../assets/Logo.svg'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="footer-logo"/>
                    <p>Little Lemon is a family-owned Mediterranean restaurant, focused on
                         traditional recipes served with a modern twist.</p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;