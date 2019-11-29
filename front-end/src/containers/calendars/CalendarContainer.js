import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";


class CalendarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            defaultView: 'dayGridMonth',
            // @Docs: https://fullcalendar.io/docs/header
            header: {
                left: 'today prev next',
                center: 'title',
                right: 'dayGridMonth listMonth dayGridWeek'
            },
            // @Docs: https://fullcalendar.io/docs/event-object
            events: [
                { id: 1, title: 'Jordan\'s booking', start: '2019-11-06', end: '2019-11-09', allDay: true },
                { id: 2, title: 'Nial\'s booking', start: '2019-11-07', end: '2019-11-07', allDay: true },
                { id: 3, title: 'Nial\'s 2nd booking', start: '2019-11-25', end: '2019-12-05', allDay: true }
            ]
        }
    }

    // Clicking on a specific date on the calendar
    handleDateClick = arg => {
        if (window.confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
            this.setState({
                // add new event data
                events: this.state.events.concat({
                    // creates a new array
                    title: "New Booking",
                    start: arg.date,
                    end: arg.date,
                    allDay: true
                })
            });
        }
    };

    // Clicking on a specific bookings
    handleEventClick = arg => {
        alert('Event: ' + arg.event.title + '. This could redirect to the booking info page.');
    };

    render() { 
        return (
            <div className="component-container">
                <FullCalendar 
                    defaultView={this.state.defaultView} 
                    header={this.state.header}
                    plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
                    events={this.state.events}
                    eventClick={this.handleEventClick}
                    dateClick={this.handleDateClick}
                    resources={this.state.resources}
                    />
            </div>
         );
    }
}
 
export default CalendarContainer;