import React from 'react';

const BookingForm = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const booking ={
            "arrivalDate": event.target.arrivalDate.value,
            "departureDate": event.target.departureDate.value,
            "firstName": event.target.firstName.value,
            "lastName": event.target.lastName.value,
            "numberOfPeople": event.target.numberOfPeople.value,
            "rooms": event.target.rooms.value
        }
        props.handlePiratePost(booking);
    
      }

    return ( 
        <div className="booking-form">
            <form onSubmit={handleSubmit}>
                <span>Arrival date: </span>
                <input type="date" name="arrivalDate" />
                <span>Departure date: </span>
                <input type="date" name="departureDate" />
                <span>Guest: </span>
                <input type="text" placeholder="First Name" name="firstName" />
                <input type="text" placeholder="Last Name" name="lastName" />
                <span>Number of People: </span>
                <input type="number" name="numberOfPeople"/>
                <span>Rooms: </span>
                <input type="datalist" name="rooms" />
                <button type="submit">Book</button>
            </form>
        </div>
     );
}
 
export default BookingForm;