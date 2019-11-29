import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/request';
import GuestList from '../../components/guests/GuestList';

class GuestContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            guests: []
         }
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

    render() { 
        return ( 
            <div className="component-container">
                <Router>
                <Fragment>
                    <Switch>
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