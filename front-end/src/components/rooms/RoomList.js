import React from 'react';
import Room from './Room';

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
        <ul className="component-list">
            {rooms}
        </ul>
     );
}
 
export default RoomList;