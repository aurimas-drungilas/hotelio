import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import Request from '../../helpers/request';

class ReportGuestMostBookings extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            data: []
        }
        this.populateGuestsMostBookings = this.populateGuestsMostBookings.bind(this);
    }

    componentDidMount() {
        this.populateGuestsMostBookings();
    }

    populateGuestsMostBookings() {
        const request = new Request();
        const url = '/api/guests';

        request.get(url)
            .then((json) => {
                const guests = json._embedded.guests.filter((guest) => {
                    if (guest.bookings.length > 0) {
                        return true;
                    }
                    return false;
                });

                const data = [["Guest", "Bookings"]];
                guests.map((guest) => {
                    data.push([guest.firstName + ' ' + guest.lastName, guest.bookings.length]);
                });

                this.setState({data: data});
            });
    }

    render() { 
        return (
            <div className={"pie-chart"}>
                <h1>Guest with the Most bookings</h1>
                <Chart
                    width={'100%'}
                    height={'700px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={this.state.data}
                    options={{
                        slices: {
                            0: { color: '#09d3ac'},
                            1: { color: '#ffaf5b'},
                            2: { color: '#74bbf4'},
                            3: { color: '#ff5086'},
                            4: { color: '#09d3ac'},

                        },
                        is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />

            </div>

        );
    }
}
 
export default ReportGuestMostBookings;