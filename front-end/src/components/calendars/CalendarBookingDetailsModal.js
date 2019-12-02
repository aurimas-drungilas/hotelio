import React, {Fragment} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class CalendarBookingDetailsModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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

    render() {
        if (!this.props.booking) return 'Loading...';
        return (
            <Fragment>
                <Button variant="primary" onClick={this.showModal}>
                    Launch demo modal
                </Button>

                <Modal show={this.state.show} onHide={this.closeModal} >
                    <Modal.Body>
                        ID: {this.props.booking.id}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.closeModal} >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </ Fragment>
        );
    }
}

export default CalendarBookingDetailsModal;