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

            <div>
            <h3>Important Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Login</a></li>
            </ul>
            </div>
            </section>
        </footer>
    );
};

export default Footer;