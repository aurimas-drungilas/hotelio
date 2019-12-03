import React from 'react';

class RoomCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleCreateRoom = this.handleCreateRoom.bind(this);
    }

    handleCreateRoom(event) {
        event.preventDefault();
        const newRoom = {
            roomNumber: event.target.roomNumber.value,
            capacity: event.target.capacity.value
        };
        this.props.onCreateRoom(newRoom);
    }

    render() { 
        return (  
            <div className="create-form">
                <form onSubmit={this.handleCreateRoom}>
                    <div className={"create-form-element"}>
                        <p>Room Number</p>
                        <input type="number" name="roomNumber" />
                    </div>
                    <div className={"create-form-element capacity"}>
                        <p>Capacity</p>
                        <input type="number" name="capacity" min="1"/>
                    </div>
                    <div className={"booking-form__submit"}>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}
 
export default RoomCreateForm;