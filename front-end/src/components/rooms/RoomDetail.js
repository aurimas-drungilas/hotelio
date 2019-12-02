import React from 'react';

const RoomDetail = (props) => {

    if(!props.room){
        return "Loading your requested information."
    }

    const bookings = props.room.bookings.map((booking, index) => {
        const startDate = booking.startDate.toString().substring(0,10);
        const endDate = booking.endDate.toString().substring(0,10);
        return <div key={index}>
            <p>Occupied from: {startDate} to {endDate}</p>
            <p>Number of Guests: {booking.numberOfPeople}</p>
        </div>
    })

    return ( 
        <div className="component">
        <h4>Bookings for room {props.room.roomNumber}: </h4>
        {bookings}
        </div>
     );
}
 
export default RoomDetail;