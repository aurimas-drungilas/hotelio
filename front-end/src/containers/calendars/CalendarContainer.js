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
import CalendarBookingDetailsModal from '../../components/calendars/CalendarBookingDetailsModal';


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
            events: [],
            resources: [],
            resourceColumns: [
                {
                  labelText: 'Room',
                  field: 'title'
                },
                {
                  labelText: 'Capacity',
                  field: 'capacity'
                }
            ],
            selectedBooking: null
        }
        this.modalRef = React.createRef();
        this.fetchBookingById = this.fetchBookingById.bind(this);
    }

    componentDidMount() {
        this.populateBookings();
        this.populateRoomsList();
    }

    populateBookings() {
        // AKA events
        const request = new Request();
        const url = '/api/bookings?size=1000';
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
        // if (window.confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
        //     this.setState({
        //         // add new event data
        //         events: this.state.events.concat({
        //             title: "New Booking",
        //             // ResourceIds should come from what rooms are selected during the new booking process.
        //             resourceIds: [2], 
        //             start: arg.date,
        //             end: arg.date,
        //             allDay: true
        //         })
        //     });
        // }
    }

    fetchBookingById(id) {
        const request = new Request();
        const url = '/api/bookings/' + id;
        return request.get(url);
    }

    // Clicking on a specific booking
    handleEventClick = arg => {
        console.dir(arg.event.id);
        this.fetchBookingById(arg.event.id)
            .then((json) => {
                this.setState({selectedBooking: json})
            })
            .then(() => {
                this.modalRef.current.showModal();
            });
    };

    render() { 
        return (
            <div className="calendar-container">
                <h1>Calendar</h1>
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
                <CalendarBookingDetailsModal booking={this.state.selectedBooking} ref={this.modalRef} />
            </div>
         );
    }
}
 
export default CalendarContainer;