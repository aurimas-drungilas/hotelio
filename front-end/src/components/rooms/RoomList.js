import React from 'react';
import Room from './Room';
import { Link } from 'react-router-dom';

const RoomList = (props) => {

    if(props.rooms.length === 0){
        return "Loading your requested information."
    }

    const rooms = props.rooms.map((room, index) => {
        return(
            <li key={index} className="component-item">
                <div className="component">
                    <Room room={room} />
                </div>
            </li>
        )
    })

    return ( 
        <div>
        <Link to="/rooms/new"><button className="add-btn">Add New Room</button></Link>
        <ul className="component-list">
            {rooms}
        </ul>
        </div>
     );
}
 
export default RoomList;