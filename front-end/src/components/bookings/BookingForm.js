import React, {useState} from 'react';
import Request from '../../helpers/request';

class BookingForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            availableRooms: [],
            availableGuests: []
        };
        this.handleNewBooking = this.handleNewBooking.bind(this);
        this.populateAvailableRooms = this.populateAvailableRooms.bind(this);
        this.populateAvailableGuests = this.populateAvailableGuests.bind(this);
    }

    componentDidMount() {
        this.populateAvailableRooms();
        this.populateAvailableGuests();
    }

    populateAvailableRooms() {
        // TODO: only show actually available rooms.
        // TODO: refresh this when the date gets updated.
        const request = new Request();
        const url = '/api/rooms?size=1000';
        request.get(url)
            .then(json => this.setState({availableRooms: json._embedded.rooms}));
    }

    populateAvailableGuests() {
        const request = new Request();
        const url = '/api/guests?size=1000';
        request.get(url)
            .then(json => this.setState({availableGuests: json._embedded.guests}));
    }

    handleNewBooking(event) {
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
        console.dir(booking);
        this.props.onNewBooking(booking);
    }

    render() {
        const availableRoomsOptions = this.state.availableRooms.map((room, index) => {
            return(
                <option key={index} value={room._links.self.href}>{room.roomNumber}</option>
            );
        });

        const availableGuestsOptions = this.state.availableGuests.map((guest, index) => {
            return(
                <option key={index} value={guest._links.self.href}>{guest.firstName} {guest.lastName}</option>
            );
        });

        return ( 
            <div className="booking-form">
                <form onSubmit={this.handleNewBooking}>
                    <div className="booking-form__field">
                        <p>Guest</p>
                        <select name="guest" defaultValue={''} required>
                            <option value={''} disabled={'disabled'}>Select a guest</option>
                            <option value={'new'} disabled>New guest</option>
                            {availableGuestsOptions}
                        </select>
                    </div>

                    <div className="booking-form__field">
                        <p>Arrival date</p>
                        <input type="date" name="startDate" value="2019-12-02" required />
                    </div>

                    <div className="booking-form__field">
                        <p>Departure date</p>
                        <input type="date" name="endDate" value="2019-12-03" required />
                    </div>

                    <div className="booking-form__field">
                        <p>Number of People</p>
                        <input type="number" name="numberOfPeople" value="2" required />
                    </div>

                    <div className="booking-form__field">
                        <p>Available rooms</p>
                        <select name="rooms" size="5" multiple={true} required>
                            {availableRoomsOptions}
                        </select>
                    </div>

                    <div className="booking-form__submit">
                        <button type="submit">Book</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BookingForm;