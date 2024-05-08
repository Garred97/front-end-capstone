import React, { useState } from 'react'

const BookingForm = (props) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
  return (
    <header>
        <section className='form-heading'>
        <h1>Reserve a Table</h1>
        </section>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <section>
                        <label htmlFor='book-date'>Choose Date:</label>
                        <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required />
                    </section>

                    <section>
                        <label htmlFor='book-time'>Choose Time:</label>
                        <select id='book-time' value={time} onChange={(e) => setTime(e.target.value)} required>
                            <option value=''>Select a Time</option>
                            {props.availableTimes.availableTimes.map(availableTimes => {
                                return <option key={availableTimes}>
                                    {availableTimes}
                                    </option>
                                })}
                        </select>
                    </section>

                    <section>
                        <label htmlFor='boook-guests'>Number of Guests:</label>
                        <input id='book-guests'  min='1' value={guests} onChange={(e) => setGuests(e.target.value)} required/>
                    </section>

                    <section>
                    <label htmlFor='boook-ocassion'>Occasion:</label>
                    <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                        <option>Select an Occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    </section>

                    <section className='btnReceive'>
                        <input aria-label='On Click' type='submit' value={'Make Your Reservation'} disabled={!date || !time || !guests || !occasion}/>
                    </section>
                </fieldset>
            </form>
        </section>
    </header>
  )
}

export default BookingForm