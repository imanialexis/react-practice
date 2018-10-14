import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'imani',age: 28},
      {name: 'gabby',age: 21},
      {name: 'asmar',age: 18}
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked!');
  }

  render() {
    return (
      <div className="App">
      <h1> Hi, I'm a React App </h1>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name = {this.state.persons[0].name} age= {this.state.persons[0].age}/>
      <Person name = {this.state.persons[1].name} age= {this.state.persons[1].age}> Hobbies : Cooking </Person>
      <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Does this work now?'));
  }
}

export default App;
