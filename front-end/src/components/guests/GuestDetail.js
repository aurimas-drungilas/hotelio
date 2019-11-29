import React from 'react';
import Guest from './Guest';

const GuestDetail = (props) => {

    if(!props.guest){
        return "Loading your requested information."
    }

    return ( 
        <div className="component">

        </div>
     );
}
 
export default GuestDetail;