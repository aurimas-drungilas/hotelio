import React, {Fragment} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import BookingDetails from '../bookings/BookingDetails';
import GuestDetail from './GuestDetail';
import GuestCreateForm from './GuestCreateForm';
import Request from '../../helpers/request';

class CalendarBookingDetailsModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleCreateGuest = this.handleCreateGuest.bind(this);
    }

    showModal() {
        this.setState({
          show: true
        });
    }

    closeModal() {
        this.props.onSelectGuest('');
        this.setState({
            show: false
        });
    }

    handleCreateGuest(guest) {
        const request = new Request();
        const url = '/api/guests';
        request.post(url, guest)
            .then((data) => data.json())
            .then((json) => {
                this.closeModal();
                this.props.onSelectGuest(json._links.self.href)
            })
            
    }

    render() {
        // if (!this.props.booking) return null;
        return (
            <Fragment>
                <Modal show={this.state.show} onHide={this.closeModal} >
                    <Modal.Body>
                        <GuestCreateForm onCreateGuest={this.handleCreateGuest} />
                    </Modal.Body>
                    <Modal.Footer>
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