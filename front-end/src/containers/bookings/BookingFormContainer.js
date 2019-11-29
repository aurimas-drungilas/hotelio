import React, { Component } from 'react';
import Request from '../../helpers/request';
import BookingForm from '../../components/bookings/BookingForm';

class BookingFormContainer extends Component {
    constructor(props) {
        super(props);
    }

    handleNewBooking(booking){
        const request = new Request();
        request.post('/api/bookings', booking).then(() => {
            window.location = '/bookings'
        })
    }

    render() { 
        return ( 
            <BookingForm />
         );
    }
}
 
export default BookingFormContainer;