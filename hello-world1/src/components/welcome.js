import React, { Component } from "react";

/* This is a CLASS COMPONENT
They are more feature rich. They maintain their own private data. They are also stateful.
Used for more complex UI. Provides Life Cycle hooks */

class Welcome extends Component {
  render() {
    // props is an inbuilt parameter for a Component. so we use this.props

    /* Props are passed to the component. They are function parameters. Immutable
      States are within the component declared in the function. Mutable */
    return (
    <div>
      <h1>CC Hello {this.props.name} a.k.a {this.props.heroName}</h1>
      {this.props.children}
    </div>
    )
  }
}

export default Welcome;