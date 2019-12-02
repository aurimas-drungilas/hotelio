import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/request';
import RoomList from '../../components/rooms/RoomList';
import RoomDetail from '../../components/rooms/RoomDetail';

class RoomContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            rooms: []
         }
         this.findRoomById = this.findRoomById.bind(this);
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

    findRoomById(id){
        return this.state.rooms.find((room) => {
            return room.id === parseInt(id);
        })
    }

    render() { 
        return ( 
            <div className="component-container">
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/rooms/:id" render={(props) => {
                            const id = props.match.params.id;
                            const room = this.findRoomById(id);
                            return <RoomDetail room={room} />
                        }} />
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