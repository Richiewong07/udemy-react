import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';    //not a component but a function


class App extends PureComponent {
  // passes props received to constructor method
  constructor(props) {
    // calls function in parent component
    super(props)
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
          { id: 1, name: 'Richie', age: 24},
          { id: 2, name: 'Ann', age: 24},
          { id: 3, name: 'Calvin', age: 21}
        ],
        showPersons: false,
        toggleClicked: 0
    }
  }

  // used to update state
  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  // after render, tells if component is successfully mounted (do not uodate state)
  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  // component lifecycle update triggered by internal change (no componentWillRecieve)


  // decided if you want to continue or not
  // return false to cancel update process --> will not reach render methond --> will not show in DOM, works cause person is set to new array
  // do not need if extending from Pure components

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Update App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }


  // sync your state to props --> once exucute --> render methond --> update child components
  componentWillUpdate(nextProps, nextState) {
    console.log('[Update App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  // tells component you sucessfully updated (do not update state)
  componentDidUpdate () {
    console.log('[Update App.js] Inside componentDidUpdate')
  }


  // state = {
  //   persons: [
  //     { id: 1, name: 'Richie', age: 24},
  //     { id: 2, name: 'Ann', age: 24},
  //     { id: 3, name: 'Calvin', age: 21}
  //   ],
  //   showPersons: false
  // }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex]);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }


  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // want to copy array w/o mutating orignial array
    persons.splice(personIndex, 1); // delete copy (always mutate the copy)
    this.setState({persons: persons}); // assign change copy as new state
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {  // calling prevState for click counter b/c it cannot be mutated anywhere else
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }


  // tells react what is should render if it reaches out to the DOM depending on what the real DOM looks like, no render if changes are not needed to be made --> then renders child components

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Person</button>
        <Cockpit
          appTitle={this.props.title} //passed down from index.js file
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler} />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);   // higher order component
