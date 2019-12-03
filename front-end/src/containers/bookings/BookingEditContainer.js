import React, { Component } from 'react';
import BookingEditForm from '../../components/bookings/BookingEditForm';
import Request from '../../helpers/request';

class BookingEditContainer extends Component {
    constructor(props) {
        super(props);
        this.handleBookingUpdate = this.handleBookingUpdate.bind(this);
    }

    handleBookingUpdate(booking){
        const request = new Request();
        request.patch('/api/bookings/' + this.props.booking.id, booking).then(() => {
            window.location = '/calendars'
        })
    }

    render() { 
        return (
            <div className={"c"}>
                <h1>Update Guests Booking</h1>
                <BookingEditForm
                    booking={this.props.booking}
                    guests={this.props.guests}
                    rooms={this.props.rooms}
                    handleBookingUpdate={this.handleBookingUpdate}
                />
            </div>

         );
    }
}
 
export default BookingEditContainer;