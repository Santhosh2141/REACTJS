import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName: 'Parent'
    }
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }

  /* first we define the method.
  then call the child compononet.
  pass the method as a prop to the child component.
  use this method in the child component as props.method.
  use arrow function to pass a value from the child to the parent.
  using a parameter in this method that value can be accessed.*/

  render() {
    return (
      <div>
        {/* greetHandler is a prop that is passed to its child component */}
        <ChildComponent greetHandler = {this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent