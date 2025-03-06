import React, { Component } from 'react'
import Input from './Input'

// Refs cant be attached to functional components.
// here we pass the component as a ref.
// when we click the button.. the function is called to the child comp which does the focus part.
export class FocusInput extends Component {
  constructor(props) {
    super(props)
    this.compRef = React.createRef();
  }

  clickHandler = () => {
    this.compRef.current.focusInput();
  }
  render() {
    return (
      <div>
        <Input ref={this.compRef}></Input>
        <button onClick={this.clickHandler}>Focus Button</button>
      </div>
    )
  }
}

export default FocusInput