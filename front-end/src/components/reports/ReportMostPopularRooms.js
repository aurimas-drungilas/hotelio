import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import Request from '../../helpers/request';

class ReportMostPopularRooms extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            data: [
                ['Rooms', 'Bookings'],
                ['2014', 1000],
                ['2015', 1170],
                ['2016', 660],
                ['2017', 1030],
            ]
        }
        this.populateReportData = this.populateReportData.bind(this);
    }

    componentDidMount() {
        this.populateReportData();
    }

    populateReportData() {
        const request = new Request();
        const url = '/api/rooms?size=1000';

        request.get(url)
            .then((json) => {
                const rooms = json._embedded.rooms;
                const graphData = [['Rooms', 'Bookings']];
                rooms.map((room) => {
                    graphData.push([room.roomNumber, room.bookings.length]);
                });
                this.setState({data: graphData})
            });
    }

    render() { 
        return (  
            <div className="report-most-popular-rooms">
                <h1>Most Popular Rooms</h1>
                <Chart
                    width={'100%'}
                    height={'300px'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={this.state.data}
                    options={{
                        colors: ['#ff5086']
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        );
    }
}
 
export default ReportMostPopularRooms;