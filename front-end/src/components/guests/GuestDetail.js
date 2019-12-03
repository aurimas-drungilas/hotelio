import React from 'react';
import Guest from './Guest';

const GuestDetail = (props) => {

    if(!props.guest){
        return "Loading your requested information."
    }

    const sortedBookings = props.guest.bookings.sort((a,b) => {
        let dateA = new Date(a.endDate)
        let dateB = new Date(b.endDate)
        return dateB - dateA;
    })

    const bookings = sortedBookings.map((booking, index) => {

        // Get todays date
        const endDate = booking.endDate.toString().substring(0,10);
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        // Set Milliseconds per day
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;

        function dateDiffInDays(a, b) {
            // Discard the time and time-zone information.
            const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
            const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    
            return Math.floor((utc2 - utc1) / _MS_PER_DAY);
        }

        // Find difference
        const todayDate = new Date(today),
            exitDate = new Date(endDate),
            difference = dateDiffInDays(todayDate, exitDate);
            
        // Print statement dependant on previous or current
        if (difference >= 0){
            return <div className={"guest-stay-info"} key={index}>
                <p>Leaving on: {endDate}</p>
                <p>Number of Guests: {booking.numberOfPeople}</p>
                </div>
        } else {
            return <div className={"guest-stay-info"} key={index}>
                <p>Checked out: {endDate}</p>
                <p>Number of Guests: {booking.numberOfPeople}</p>
                </div>
        }
        
    })

    return ( 
        <div className="guest-details">
            <h4>All bookings for {props.guest.firstName} {props.guest.lastName}: </h4>
            {bookings}
        </div>
     );
}
 
export default GuestDetail;