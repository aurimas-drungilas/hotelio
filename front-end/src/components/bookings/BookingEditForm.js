import React from 'react';

const BookingEditForm = (props) => {


    if(!props.booking){
        return "Loading your requested information."
    }

    // const guest = props.booking.guest.map((guest, index) => {
    //     return <option key={index} value={guest._links.self.href}>{guest.firstName} {guest.lastName}</option>
    // })

    const roomOptions = props.rooms.map((room, index) => {
        return <option key={index} value={room._links.self.href}>{room.roomNumber}</option>
    })

    const bookingHasRoom = (room) => {
        return props.booking.rooms.some((bookingRoom) => {
            return bookingRoom.roomNumber === room.roomNumber
        })
    }

    const findGuestLink = () => {
        const foundGuest = props.guests.find((guest) => {
            return guest.firstName === props.booking.guest.firstName
        })
        return foundGuest._links.self.href;
    }

    const findRoomLinks = () => {
        const bookingRooms = props.rooms.filter((room) => {
            return bookingHasRoom(room)
        })
        return bookingRooms.map((room) => {
            return room._links.self.href;
        })
    }


    const handleEditBooking = (event) => {
        event.preventDefault();

        const roomsSelected = [];
        for (const room of event.target.rooms.selectedOptions) {
            roomsSelected.push(room.value);
        }

        const booking = {
            "guest": event.target.guest.value,
            "startDate": event.target.startDate.value,
            "endDate": event.target.endDate.value,
            "numberOfPeople": event.target.numberOfPeople.value,
            "rooms": roomsSelected
        }
        props.handleBookingUpdate(booking);
    }

    const formatDate = (date) => {
        return date.toString().substring(0,10);
    }

    return ( 
        <div className="booking-form">
                <form onSubmit={handleEditBooking}>
                    <div className="booking-form__field">
                        <p>Guest</p>
                        <select name="guest" defaultValue={findGuestLink()} required>
                            <option value={findGuestLink()}>{props.booking.guest.firstName} {props.booking.guest.lastName}</option>
                        </select>
                    </div>

                    <div className="booking-form__field">
                        <p>Arrival date</p>
                        <input type="date" name="startDate" defaultValue={formatDate(props.booking.startDate)} required />
                    </div>

                    <div className="booking-form__field">
                        <p>Departure date</p>
                        <input type="date" name="endDate" defaultValue={formatDate(props.booking.endDate)} required />
                    </div>

                    <div className="booking-form__field">
                        <p>Number of People</p>
                        <input type="number" name="numberOfPeople" defaultValue={props.booking.numberOfPeople} required />
                    </div>

                    <div className="booking-form__field">
                        <p>Available rooms</p>
                        <select name="rooms" size="5" multiple={true} defaultValue={findRoomLinks()} required>
                            {roomOptions}
                        </select>
                    </div>

                    <div className="booking-form__submit">
                        <button type="submit">Book</button>
                    </div>
                </form>
            </div>
     );
}
 
export default BookingEditForm;