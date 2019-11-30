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
            <div className="main-container">
            <NavBar />
                <Router>
                    <Fragment>
                        <Switch>
                            <Route path="/calendars" component={CalendarContainer} />
                            <Route path="/guests" component={GuestContainer} />
                        </Switch>
                        <Switch>
                            <Route path="/rooms" component={RoomContainer} />
                        </Switch>
                        <Switch>
                            <Route path="/bookings/new" component={BookingFormContainer} />
                        </Switch>
                    </Fragment>
                </Router>
            </div>
         );
    }
}
 
export default MainContainer;