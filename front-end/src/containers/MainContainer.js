import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GuestContainer from './guests/GuestContainer';
import CalendarContainer from './calendars/CalendarContainer';
import RoomContainer from './rooms/RoomContainer';
import BookingFormContainer from './bookings/BookingFormContainer';
import NavBar from '../NavBar';


class MainContainer extends Component {
    render() { 
        return ( 
            <Fragment>
            <div className="main-container">
                <Router>
                    <Switch>
                        <Route path="/calendars" component={CalendarContainer} />
                        <Route path="/guests" component={GuestContainer} />
                        <Route path="/rooms" component={RoomContainer} />
                        <Route path="/bookings/new" component={BookingFormContainer} />
                    </Switch>
                </Router>
            </div>
            </Fragment>
         );
    }
}
 
export default MainContainer;