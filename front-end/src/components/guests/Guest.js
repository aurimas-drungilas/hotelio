import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Guest = (props) => {

    if(!props.guest){
        return "Loading your requested information."
    }

    const url = "/guests/" + props.guest.id;
    const rewardPoints = props.guest.bookings.length * 10;

    return ( 
        <Fragment>
            <Link to={url} className="name">Guest name: {props.guest.firstName} {props.guest.lastName}</Link>
            <p>Age: {props.guest.age}</p>
            <p>Reward Points: {rewardPoints}</p>
        </Fragment>
     );
}
 
export default Guest;