import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

class CalendarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            calendar: {
                defaultView: 'dayGridMonth',
                events: [
                    { title: 'event 1', date: '2019-11-28' },
                    { title: 'event 2', date: '2019-11-30' }
                ]
            }
        }
    }
    render() { 
        return (
            <div className="component-container">
                <FullCalendar 
                    defaultView={this.state.calendar.defaultView} 
                    plugins={[ dayGridPlugin ]}
                    events={this.state.calendar.events} />
            </div>
         );
    }
}
 
export default CalendarContainer;