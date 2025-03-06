import React, { Component } from 'react'

export class RegComp extends Component {
  render() {
    const {name} = this.props;
    console.log("Regular Comp render")
    return (
      <div>
        Regular Component {name}
      </div>
    )
  }
}

export default RegComp