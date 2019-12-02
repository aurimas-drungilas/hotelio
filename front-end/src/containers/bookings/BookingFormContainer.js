import React, { Component } from 'react';
import Request from '../../helpers/request';
import BookingForm from '../../components/bookings/BookingForm';

class BookingFormContainer extends Component {
    constructor(props) {
        super(props);
        this.handleNewBooking = this.handleNewBooking.bind(this);
    }

    handleNewBooking(booking){
        const request = new Request();
        request.post('/api/bookings', booking).then(() => {
            window.location = '/calendars'
        })
    }

    render() { 
        return (
            <div className="booking-form-container">
                <h1>Booking Form</h1>
                <BookingForm onNewBooking={this.handleNewBooking} />
            </div>
         );
    }
}
 
export default BookingFormContainer;