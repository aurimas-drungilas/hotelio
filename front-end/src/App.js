import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div className="App">
      <h1>Hotelio</h1>
      <span>Simplifying all your hotel management needs because managing your guests shouldn’t be as hard as changing a king sized duvet cover.</span>
      <MainContainer />
    </div>
  );
}

export default App;
