import React from "react";
import { Link } from "react-router-dom";

const BookingConfirmed = () => {
    return (
        <section className="header">
            <section>
                <h1>Booking has been <span>confirmed!</span></h1>
                <Link to='/'><button aria-label="On Click">Go To Home</button></Link>
            </section>
        </section>
    )
}

export default BookingConfirmed;