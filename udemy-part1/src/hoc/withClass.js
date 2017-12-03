import React, { Component } from 'react';

// const withClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent {...props}/>
//     </div>
//   )
// }

const withClass = (WrappedComponent, className) => {
  return class extends Component{
    render() {
      return(
        <div className={className}>
          <WrappedComponent {...this.props}/>
        </div>
      )
    }
  }
}

export default withClass;

//function that takes config --> return function that receive props --> then renders something

//withClass not a funcational component, it is a JS function that returns a funcational component

//{...props} --> pass on props as you get them and assign, spilt them up as key value pairs then assign them to components
