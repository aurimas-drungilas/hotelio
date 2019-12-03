import React from 'react';

const BookingDetails = (props) => {
    if (!props.booking) return 'Loading...';

    // Stack Overflow to the rescue...
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // a and b are javascript Date objects
    function dateDiffInDays(a, b) {
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }

    // Get duration
    const a = new Date(props.booking.startDate.substring(0,10)),
            b = new Date(props.booking.endDate.substring(0,10)),
            difference = dateDiffInDays(a, b);
            

    return(
        <div class="booking-details">
            <p>{props.booking._embedded.guest.firstName} {props.booking._embedded.guest.lastName}</p>
            <p>Start date: {props.booking.startDate.substring(0,10)}</p>
            <p>End date: {props.booking.endDate.substring(0,10)}</p>
            <p>Number of people: {props.booking.numberOfPeople}</p>
            <p>Duration of Stay: {difference} days</p>
        </div>
    );
};

export default BookingDetails;