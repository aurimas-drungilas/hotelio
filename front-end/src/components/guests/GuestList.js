import React from 'react';
import Guest from './Guest';
import { Link } from 'react-router-dom';

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
        <div>
            <div className={"new-guest-button-container"}>
                <Link to="/guests/new">
                    <button className="add-btn">Add New Guest</button>
                </Link>
            </div>

        <ul className="component-list">
            {guests}
        </ul>
        </div>
     );
}
 
export default GuestList;