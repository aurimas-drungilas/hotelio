import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/request';
import RoomList from '../../components/rooms/RoomList';

class RoomContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            rooms: []
         }
    }

    componentDidMount() {
        const request = new Request();
        request.get('/api/rooms')
        .then(data => {
            this.setState({
                rooms: data._embedded.rooms
            })
        })
    }

    render() { 
        return ( 
            <div className="component-container">
            <Router>
                <Fragment>
                    <Switch>
                        <Route render={() => {
                            return <RoomList rooms={this.state.rooms} />
                        }} />
                    </Switch>
                </Fragment>
            </Router>
                
            </div>
         );
    }
}
 
export default RoomContainer;