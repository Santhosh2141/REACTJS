import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  // pure component will not print the console msg in every interval.

  // it does a Shallow comparison(SC), which is checking if the values point to the same object, of the states and props.
  // if there is a diff then itll update. else it wont.
  render() {
    const {name} = this.props;
    console.log("Pure Comp render")
    return (
      <div>
        Pure Component {name}
      </div>
    )
  }
}

export default PureComp