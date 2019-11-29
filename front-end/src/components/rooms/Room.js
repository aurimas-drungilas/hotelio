import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

const Room = (props) => {
    return ( 
        <Fragment>
            <h4>Room Number: {props.room.roomNumber}</h4>
            <p>Room Capacity: {props.room.capacity}</p>
        </Fragment>
     );
}
 
export default Room;