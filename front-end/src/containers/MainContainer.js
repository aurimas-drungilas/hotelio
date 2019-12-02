import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GuestContainer from './guests/GuestContainer';
import CalendarContainer from './calendars/CalendarContainer';
import RoomContainer from './rooms/RoomContainer';
import BookingFormContainer from './bookings/BookingFormContainer';
import NavBar from '../NavBar';
import BookingEditContainer from './bookings/BookingEditContainer';
import Request from '../helpers/request';


class MainContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
          bookings:[],
          guests:[],
          rooms:[]
        }
        this.findBookingById = this.findBookingById.bind(this)
      }
    
      componentDidMount(){
        const request = new Request()
    
        const promise1 = request.get('/api/bookings');
        const promise2 = request.get('/api/guests');
        const promise3 = request.get('/api/rooms');
        const promises = [promise1, promise2, promise3]
    
        Promise.all(promises).then((data) => {
          this.setState({
            bookings: data[0]._embedded.bookings,
            guests: data[1]._embedded.guests,
            rooms: data[2]._embedded.rooms,
          })
        })
      }
    
      findBookingById(id){
        const booking = this.state.bookings.find((booking) => {
          return booking.id === parseInt(id)
        })
        return booking;
      }

    render() { 
        return ( 
            <Fragment>
            <div className="main-container">
                <Router>
                    <Switch>
                        <Route exact path="/" component={CalendarContainer} />
                        <Route path="/calendars" component={CalendarContainer} />
                        <Route path="/guests" component={GuestContainer} />
                        <Route path="/rooms" component={RoomContainer} />
                        <Route path="/bookings/new" component={BookingFormContainer} />
                        <Route path="/bookings/edit/:id" render={(props) => {
                            const id = props.match.params.id;
                            const booking = this.findBookingById(id);
                            return <BookingEditContainer booking={booking} guests={this.state.guests} rooms={this.state.rooms} />
                        }} />
                    </Switch>
                </Router>
            </div>
            </Fragment>
         );
    }
}
 
export default MainContainer;