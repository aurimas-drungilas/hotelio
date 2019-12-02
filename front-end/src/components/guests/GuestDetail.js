import React from 'react';
import Guest from './Guest';

const GuestDetail = (props) => {

    if(!props.guest){
        return "Loading your requested information."
    }

    const bookings = props.guest.bookings.map((booking, index) => {
        return <div key={index}>
                <p>Leaving on: {booking.endDate.toString().substring(0,10)}</p>
                <p>Number of Guests: {booking.numberOfPeople}</p>
                </div>
    })

    return ( 
        <div className="component">
            <Guest guest={props.guest} />
            <p>All Bookings: </p>
            <div>
                {bookings}
            </div>
        </div>
     );
}
 
export default GuestDetail;