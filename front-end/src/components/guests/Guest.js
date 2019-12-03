import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Guest = (props) => {

    if(!props.guest){
        return "Loading your requested information."
    }
        
    const stayLengths = props.guest.bookings.map((booking) => {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;

        function dateDiffInDays(a, b) {
            // Discard the time and time-zone information.
            const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
            const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    
            return Math.floor((utc2 - utc1) / _MS_PER_DAY);
        }

        const startDate = booking.startDate.toString().substring(0,10);
        const endDate = booking.endDate.toString().substring(0,10);

        // Find difference
        const a = new Date(startDate),
            b = new Date(endDate),
            difference = dateDiffInDays(a, b);

        return difference;
    })    

    const totalNights = stayLengths.reduce((totalValue, currentValue) => {
        return totalValue + currentValue;
    }, 0)


    const url = "/guests/" + props.guest.id;
    const rewardPoints = totalNights * 10;


    return (
        <div className={"guest-detail"}>
            <Fragment>
                <Link to={url} className="name">{props.guest.firstName} {props.guest.lastName}</Link>
                <p>Age: {props.guest.age}</p>
                <p>Reward Points: {rewardPoints}</p>
            </Fragment>
        </div>
    );
}
 
export default Guest;