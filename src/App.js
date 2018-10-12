import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1> Hi, I'm a React App </h1>
      <Person name = 'Ashley' age='29'/>
      <Person name = 'Erica' age='28'> Hobbies : Cooking </Person>
      <Person name = 'Brandon' age='27'/>
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Does this work now?'));
  }
}

export default App;
