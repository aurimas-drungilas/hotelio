import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import resourceDayGridPlugin from '@fullcalendar/resource-daygrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import Request from '../../helpers/request';

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
                    id: 404,
                    title: "404",
                    capacity: 2
                },
                {
                    id: 405,
                    title: "405",
                    capacity: 2
                },
                {
                    id: 3,
                    title: "406",
                    capacity: 4
                },
                {
                    id: 4,
                    title: "405",
                    capacity: 2
                },
                {
                    id: 5,
                    title: "406",
                    capacity: 2
                },
                {
                    id: 6,
                    title: "407",
                    capacity: 2
                },
                {
                    id: 7,
                    title: "408",
                    capacity: 2
                },
                {
                    id: 8,
                    title: "409",
                    capacity: 2
                },
                {
                    id: 9,
                    title: "410",
                    capacity: 2
                },
                {
                    id: 2,
                    title: "411",
                    capacity: 2
                },
                {
                    id: 10,
                    title: "412",
                    capacity: 2
                },
                {
                    id: 11,
                    title: "413",
                    capacity: 2
                },
                {
                    id: 12,
                    title: "414",
                    capacity: 2
                },
                {
                    id: 13,
                    title: "415",
                    capacity: 2
                },
                {
                    id: 14,
                    title: "416",
                    capacity: 2
                },
                {
                    id: 15,
                    title: "417",
                    capacity: 2
                },
                {
                    id: 16,
                    title: "418",
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

    componentDidMount() {
        this.populateBookings();
        this.populateRoomsList();
    }

    populateBookings() {
        // AKA events
        const request = new Request();
        const url = '/api/bookings';
        request.get(url)
            .then(bookings => {
                const formattedBookings = [];
                for (const booking of bookings._embedded.bookings) {
                    formattedBookings.push({
                        id: booking.id,
                        start: booking.startDate,
                        end: booking.endDate,
                        resourceIds: booking.rooms.map(room => room.id),
                        allDay: true,
                        title: booking.guest.firstName + ' ' + booking.guest.lastName + ' (' + booking.numberOfPeople + ')'
                    });
                }
                this.setState({events: formattedBookings});
            });
    }

    populateRoomsList() {
        // AKA resources
        const request = new Request();
        const url = '/api/rooms';
        request.get(url)
            .then(rooms => {
                const formattedRooms = [];
                for (const room of rooms._embedded.rooms) {
                    formattedRooms.push({
                        id: room.id,
                        title: room.roomNumber,
                        capacity: room.capacity
                    });
                }
                this.setState({resources: formattedRooms});
            });
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