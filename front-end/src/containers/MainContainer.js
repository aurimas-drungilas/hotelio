import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GuestContainer from './guests/GuestContainer';
import RoomContainer from './rooms/RoomContainer';

class MainContainer extends Component {
    render() { 
        return ( 
            <div className="main-container">
            <p>Test</p>
                <Router>
                    <Fragment>
                        <Switch>
                            <Route path="/guests" component={GuestContainer} />
                        </Switch>
                        <Switch>
                            <Route path="/rooms" component={RoomContainer} />
                        </Switch>
                    </Fragment>
                </Router>
            </div>
         );
    }
}
 
export default MainContainer;