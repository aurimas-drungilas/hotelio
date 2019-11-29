import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Guest = (props) => {

    if(!props.guest){
        return "Loading your requested information."
    }

    return ( 
        <Fragment>
            <h4>Guest name: {props.guest.firstName} {props.guest.lastName}</h4>
        </Fragment>
     );
}
 
export default Guest;