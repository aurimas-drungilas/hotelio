import React, {Fragment} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import BookingDetails from '../bookings/BookingDetails';
import GuestDetail from '../guests/GuestDetail';

class CalendarBookingDetailsModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.editBooking = this.editBooking.bind(this);
    }

    showModal() {
        this.setState({
          show: true
        });
    }

    closeModal() {
        this.setState({
            show: false
        });
    }
    
    editBooking() {
        window.location = '/bookings/edit/' + this.props.booking.id;
    }

    render() {
        if (!this.props.booking) return null;
        return (
            <Fragment>
                <Modal show={this.state.show} onHide={this.closeModal} >
                    <Modal.Body>
                        <BookingDetails booking={this.props.booking} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.editBooking} >
                            Edit
                        </Button>
                        <Button variant="secondary" onClick={this.closeModal} >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </ Fragment>
        );
    }
}

export default CalendarBookingDetailsModal;