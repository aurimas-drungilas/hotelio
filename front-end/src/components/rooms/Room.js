import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

const Room = (props) => {

    if(!props.room){
        return "Loading your requested information."
    }

    const url = "/rooms/" + props.room.id;

    return ( 
        <Fragment>
            <Link to={url} className="name">Room Number: {props.room.roomNumber}</Link>
            <p>Room Capacity: {props.room.capacity}</p>
        </Fragment>
     );
}
 
export default Room;