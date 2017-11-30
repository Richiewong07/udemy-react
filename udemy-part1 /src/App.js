import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Richie', age: 24},
      { name: 'Ann', age: 24},
      { name: 'Calvin', age: 21}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DO NOT DO this.state.persons[0].name = "Richie Wong";
    this.setState({
      persons: [
        { name: newName, age: 31},
        { name: 'Ann', age: 30},
        { name: 'Calvin', age: 22}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Richie', age: 31},
        { name: event.target.value, age: 30},
        { name: 'Calvin', age: 21}
      ]
    })

  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1> Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Richie Wong')}>Switch Name</button>
      <Person
        name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person
        name={this.state.persons[1].name} age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Richie Louis Wong')}
        changed={this.nameChangedHandler}>Hello World</Person>
      <Person
        name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
