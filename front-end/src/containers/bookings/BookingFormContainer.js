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
            <BookingForm onNewBooking={this.handleNewBooking} />
         );
    }
}
 
export default BookingFormContainer;