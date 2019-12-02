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
            <div className="room-create-form">
                <form onSubmit={this.handleCreateRoom}>
                    <div>
                        <p>Room Number</p>
                        <input type="number" name="roomNumber" />
                    </div>
                    <div>
                        <p>Capacity</p>
                        <input type="number" name="capacity" />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}
 
export default RoomCreateForm;