import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import resourceDayGridPlugin from '@fullcalendar/resource-daygrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timeline/main.css";
import "@fullcalendar/resource-timeline/main.css";


class CalendarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            // @Docs: https://fullcalendar.io/docs/timeline-view
            defaultView: 'resourceTimelineMonth',
            // @Docs: https://fullcalendar.io/docs/header
            header: {
                left: 'today prev next',
                center: 'title',
                right: 'resourceTimelineMonth dayGridMonth listMonth dayGridWeek'
            },
            // @Docs: https://fullcalendar.io/docs/event-object
            events: [
                { 
                    id: 1, 
                    resourceIds: [1], 
                    title: 'Jordan\'s booking', 
                    start: '2019-09-01', 
                    end: '2019-11-09', 
                    allDay: true 
                },
                { 
                    id: 2, 
                    resourceIds: [2], 
                    title: 'Nial\'s booking', 
                    start: '2019-11-02', 
                    end: '2019-11-25', 
                    allDay: true 
                },
                { 
                    id: 3, 
                    resourceIds: [6, 7], 
                    title: 'Nial\'s 2nd booking', 
                    start: '2019-11-05', 
                    end: '2019-12-09', 
                    allDay: true 
                },
                { 
                    id: 4, 
                    resourceIds: [10], 
                    title: 'Nial\'s 2nd booking', 
                    start: '2019-11-02', 
                    end: '2019-11-06', 
                    allDay: true 
                },
                { 
                    id: 5, 
                    resourceIds: [12], 
                    title: 'Nial\'s 2nd booking', 
                    start: '2019-11-03', 
                    end: '2019-11-11', 
                    allDay: true 
                },
                { 
                    id: 6, 
                    resourceIds: [10], 
                    title: 'Nial\'s 2nd booking', 
                    start: '2019-11-07', 
                    end: '2019-11-11', 
                    allDay: true 
                },
                { 
                    id: 7, 
                    resourceIds: [15], 
                    title: 'Nial\'s 2nd booking', 
                    start: '2019-11-03', 
                    end: '2019-12-09', 
                    allDay: true 
                },
                { 
                    id: 8, 
                    resourceIds: [12], 
                    title: 'Nial\'s 2nd booking', 
                    start: '2019-11-12', 
                    end: '2019-11-13', 
                    allDay: true 
                }
            ],
            resources: [
                {
                    id: 1,
                    title: "Room 404",
                    capacity: 2
                },
                {
                    id: 2,
                    title: "Room 405",
                    capacity: 2
                },
                {
                    id: 3,
                    title: "Room 406",
                    capacity: 4
                },
                {
                    id: 4,
                    title: "Room 405",
                    capacity: 2
                },
                {
                    id: 5,
                    title: "Room 406",
                    capacity: 2
                },
                {
                    id: 6,
                    title: "Room 407",
                    capacity: 2
                },
                {
                    id: 7,
                    title: "Room 408",
                    capacity: 2
                },
                {
                    id: 8,
                    title: "Room 409",
                    capacity: 2
                },
                {
                    id: 9,
                    title: "Room 410",
                    capacity: 2
                },
                {
                    id: 2,
                    title: "Room 411",
                    capacity: 2
                },
                {
                    id: 10,
                    title: "Room 412",
                    capacity: 2
                },
                {
                    id: 11,
                    title: "Room 413",
                    capacity: 2
                },
                {
                    id: 12,
                    title: "Room 414",
                    capacity: 2
                },
                {
                    id: 13,
                    title: "Room 415",
                    capacity: 2
                },
                {
                    id: 14,
                    title: "Room 416",
                    capacity: 2
                },
                {
                    id: 15,
                    title: "Room 417",
                    capacity: 2
                },
                {
                    id: 16,
                    title: "Room 418",
                    capacity: 4
                }
            ],
            resourceColumns: [
                {
                  labelText: 'Room',
                  field: 'title'
                },
                {
                  labelText: 'Capacity',
                  field: 'capacity'
                }
            ]
        }
    }

    // Clicking on a specific date on the calendar
    handleDateClick = arg => {
        if (window.confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
            this.setState({
                // add new event data
                events: this.state.events.concat({
                    title: "New Booking",
                    // ResourceIds should come from what rooms are selected during the new booking process.
                    resourceIds: [2], 
                    start: arg.date,
                    end: arg.date,
                    allDay: true
                })
            });
        }
    };

    // Clicking on a specific booking
    handleEventClick = arg => {
        alert('Event: ' + arg.event.title + '. This could redirect to the booking info page.');
    };

    render() { 
        return (
            <div className="component-container">
                <FullCalendar 
                    defaultView={this.state.defaultView} 
                    header={this.state.header}
                    plugins={[dayGridPlugin, interactionPlugin, listPlugin, resourceDayGridPlugin, resourceTimelinePlugin]}
                    events={this.state.events}
                    eventClick={this.handleEventClick}
                    dateClick={this.handleDateClick}
                    resources={this.state.resources}
                    resourceColumns={this.state.resourceColumns}
                    schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
                    />
            </div>
         );
    }
}
 
export default CalendarContainer;