import React from "react";
import bannerImage from '../assets/restauranfood.jpg'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served
                        with a modern twist.</p>
                        <Link to='/booking'><button aria-label="On Click">Reserve Table</button></Link>

                        <div className="banner-img">
                            <img src={bannerImage} alt="Banner Food" />
                        </div>
                </div>
            </section>
        </header>
    );
};

export default Header;