import React from 'react';

const BookingDetails = (props) => {
    if (!props.booking) return 'Loading...';
    return(
        <div class="booking-details">
            <p>{props.booking._embedded.guest.firstName} {props.booking._embedded.guest.lastName}</p>
            <p>Start date: {props.booking.startDate.substring(0,10)}</p>
            <p>End date: {props.booking.endDate.substring(0,10)}</p>
            <p>Number of people: {props.booking.numberOfPeople}</p>
        </div>
    );
};

export default BookingDetails;