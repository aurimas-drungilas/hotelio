import React from 'react';
import Guest from './Guest';

const GuestList = (props) => {

    if(props.guests.length === 0){
        return "Loading your requested information."
    }

    const guests = props.guests.map((guest, index) => {
        return(
            <li key={index} className="component-item">
                <div className="component">
                    <Guest guest={guest} />
                </div>
            </li>
        )
    })

    return ( 
        <ul className="component-list">
            {guests}
        </ul>
     );
}
 
export default GuestList;