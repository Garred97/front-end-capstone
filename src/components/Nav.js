import React, { useState } from "react";
import logo from '../assets/Logo .svg'

const Nav = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const toggleMenuVisible = () => {
        setMenuOpened(!menuOpened);
    }

    return (
        <nav className={`navbar ${menuOpened ? "open" : ""}`}>
            <a href="/" className="logo">
                <img src={logo} alt="logo" />
            </a>

            <section className="menu-icon" onClick={toggleMenuVisible}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </section>

            <ul className={`nav-links ${menuOpened ? 'visible' : ''}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;