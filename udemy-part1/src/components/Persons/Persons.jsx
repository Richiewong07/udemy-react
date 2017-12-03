import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
  }


  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidlMount');
  }


  // component lifecycle if the update is coming from the outside (triggered by the Parent)

  // sync local state of component to the prop --> then later can change state in component
  componentWillReceiveProps(nextProps) {
    console.log('[Update Persons.js] Inside componentWillReceiveProps', nextProps);
  }


  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Update Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.persons !== this.props.person ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked;
  //   // return true;
  // }


  componentWillUpdate(nextProps, nextState) {
    console.log('[Update Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }


  componentDidUpdate () {
    console.log('[Update Persons.js] Inside componentDidUpdate')
  }


  render () {
    console.log('[Persons.js] Inside render()')
    return this.props.persons.map((person, index) => {
        return <Person
          click={() => this.props.clicked(index)}   //map gives us index of element
          name={person.name}
          position={index}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)} />
      });
  }
}

export default Persons;
