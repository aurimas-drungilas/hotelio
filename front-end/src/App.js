import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from './containers/MainContainer';
import SidebarContainer from './containers/SidebarContainer';

function App() {
  return (
    <div className="App">
    <div className="sidebar">
      <SidebarContainer />
    </div>
    <div className="main">
      <MainContainer />
    </div>
    </div>
  );
}

export default App;
