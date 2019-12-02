import React from 'react';
import Guest from './Guest';

const GuestDetail = (props) => {

    if(!props.guest){
        return "Loading your requested information."
    }

    const bookings = props.guest.bookings.map((booking, index) => {
        const endDate = booking.endDate.toString().substring(0,10);
        return <div key={index}>
                <p>Leaving on: {endDate}</p>
                <p>Number of Guests: {booking.numberOfPeople}</p>
                </div>
    })

    return ( 
        <div className="component">
            <h4>All bookings for {props.guest.firstName} {props.guest.lastName}: </h4>
            {bookings}
        </div>
     );
}
 
export default GuestDetail;