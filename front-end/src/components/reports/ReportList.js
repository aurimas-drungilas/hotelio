import React from 'react';

const ReportList = (props) => {
    return(
        <div className="report-list">
            <h1>Reports</h1>
            <div className={"report-list-details"}>
                <ul>
                    <li><a href="/reports/most-popular-rooms">Most popular rooms</a></li>
                    <li><a href="/reports/guests-with-most-bookings">Guests with most bookings</a></li>
                </ul>
            </div>
        </div>
    );
};

export default ReportList;