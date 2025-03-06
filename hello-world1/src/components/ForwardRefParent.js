import React, { Component } from 'react'
import FowardRef from './FowardRef.js'

export class ForwardRefParent extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
  }
  clickHandler() {
    this.inputRef.current.focus();
  }

  // Parent comp creates a ref and attaches it to the child comp.
  // Child recieves the ref and attaches it to the component. this is forwarding referencing
  render() {
    return (
      <div>
        <FowardRef ref={this.inputRef}></FowardRef>
        <button onClick={() => {this.clickHandler()}}>Focus Input</button>
      </div>
    )
  }
}

export default ForwardRefParent