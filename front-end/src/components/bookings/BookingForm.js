import React, {useState} from 'react';
import Request from '../../helpers/request';
import GuestCreateModal from '../guests/GuestCreateModal';

class BookingForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            availableRooms: [],
            selectedRooms: [],
            availableGuests: [],
            selectedGuest: null,
            startDate: new Date().toISOString().substring(0, 10),
            endDate: new Date(new Date().getTime() + 86400000).toISOString().substring(0, 10),
            numberOfPeople: 2
        };
        this.handleNewBooking = this.handleNewBooking.bind(this);
        this.populateAvailableRooms = this.populateAvailableRooms.bind(this);
        this.populateAvailableGuests = this.populateAvailableGuests.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleGuestChange = this.handleGuestChange.bind(this);
        this.handleSelectGuest = this.handleSelectGuest.bind(this);
        this.modalRef = React.createRef();
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
        return request.get(url)
            .then(json => this.setState({availableGuests: json._embedded.guests}));
    }

    handleNewBooking(event) {
        event.preventDefault();

        const roomsSelected = [];
        for (const room of event.target.rooms.selectedOptions) {
            roomsSelected.push(room.value);
        }

        const booking = {
            "guest": this.state.selectedGuest,
            "startDate": event.target.startDate.value,
            "endDate": event.target.endDate.value,
            "numberOfPeople": event.target.numberOfPeople.value,
            "rooms": roomsSelected
        }
        this.props.onNewBooking(booking);
    }

    handleGuestChange(event) {
        this.setState({selectedGuest: event.target.value});
        console.log(event.target.value);
        if (event.target.value === 'new') {
            console.log("new selected");
            this.modalRef.current.showModal();
        }
    }

    handleSelectGuest(value) {
        console.log("booking handle selected guest", value);
        this.populateAvailableGuests()
            .then(() => {
                console.log("wait till the list is updated");
                this.setState({selectedGuest: value});
            });
    }

    handleStartDateChange(event) {
        console.log(event.target.value);
    }

    handleEndDateChange(event) {
        console.log(event.target.value);
    }

    handleNumberOfPeopleChange(event) {
        console.log(event.target.value);
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
                        <p>Guest:</p>
                        <select name="guest" defaultValue={''} value={this.state.selectedGuest} onChange={this.handleGuestChange} required>
                            <option value={''} disabled={'disabled'}>Select a guest</option>
                            <option value={'new'} >New guest</option>
                            {availableGuestsOptions}
                        </select>
                    </div>

                    <div className="booking-form__field">
                        <p>Arrival date:</p>
                        <input type="date" name="startDate" defaultValue={this.state.startDate} onChange={this.handleStartDateChange} required />
                    </div>

                    <div className="booking-form__field">
                        <p>Departure date:</p>
                        <input type="date" name="endDate" defaultValue={this.state.endDate} onChange={this.handleEndDateChange}  required />
                    </div>

                    <div className="booking-form__field">
                        <p>Number of People:</p>
                        <input type="number" name="numberOfPeople" defaultValue={this.state.numberOfPeople} onChange={this.handleNumberOfPeopleChange} required />
                    </div>

                    <div className="booking-form__field">
                        <p>Available rooms:</p>
                        <select name="rooms" size="5" multiple={true} required>
                            {availableRoomsOptions}
                        </select>
                    </div>

                    <div className="booking-form__submit">
                        <button type="submit">BOOK</button>
                    </div>
                </form>

                <GuestCreateModal ref={this.modalRef} onSelectGuest={this.handleSelectGuest} />
            </div>
        );
    }
}

export default BookingForm;