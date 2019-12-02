import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/request';
import GuestList from '../../components/guests/GuestList';
import GuestCreateForm from '../../components/guests/GuestCreateForm';
import GuestDetail from '../../components/guests/GuestDetail';

class GuestContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            guests: []
        }
        this.handleCreateGuest = this.handleCreateGuest.bind(this);
        this.findGuestById = this.findGuestById.bind(this);
    }

    componentDidMount() {
        const request = new Request();
        request.get('/api/guests')
        .then(data => {
            this.setState({
                guests : data._embedded.guests
            })
        })
    }

    handleCreateGuest(guest) {
        const request = new Request();
        const url = '/api/guests';
        request.post(url, guest)
            .then(() => window.location = '/guests');
    }

    findGuestById(id){
        return this.state.guests.find((guest) => {
            return guest.id === parseInt(id);
        })
    }

    render() { 
        return ( 
            <div className="guest-container">
                <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/guests/new" render={() => {
                            return <GuestCreateForm onCreateGuest={this.handleCreateGuest} />
                        }} />
                        <Route exact path="/guests/:id" render={(props) => {
                            const id = props.match.params.id;
                            const guest = this.findGuestById(id);
                            return <GuestDetail guest={guest} />
                        }} />
                        <Route render={() => {
                            return <GuestList guests={this.state.guests} />
                        }} />
                    </Switch>
                </Fragment>
                </Router>
            </div>
         );
    }
}
 
export default GuestContainer;