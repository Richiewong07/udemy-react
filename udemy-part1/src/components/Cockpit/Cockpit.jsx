import React from 'react';

import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';


const cockpit = (props) => {
  const assignedClasses = [];

  let btnClass = classes.Button;
  if(props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if(props.persons.length <= 2) {
    assignedClasses.push(classes.red); //classes = ['red'], accessing as property using CSS modules
  }
  if(props.persons.length <= 1) {
    assignedClasses.push(classes.bold) // classes = ['red', 'bold']
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </Aux>
  );


  // return [
  //   <h1 key = "1">{props.appTitle}</h1>,
  //   <p key = "2" className={assignedClasses.join(' ')}>This is really working!</p>,
  //   <button key = "3" className={btnClass} onClick={props.clicked}>Toggle Persons</button>
  // ]

};

export default cockpit;
