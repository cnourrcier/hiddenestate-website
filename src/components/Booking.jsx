import './Booking.css';

const Booking = () => {

    return (
        <section className="booking">
            <h2>Book Now</h2>
            <div className='button-container'>
                <button className="button history-button">View Our History</button>
                <button className="button book-button">Reserve Your Stay</button>
            </div>
        </section>
    )
}

export default Booking;