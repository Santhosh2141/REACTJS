import React, { Component } from 'react'

export class ClassClick extends Component {
  clickButton(){
    console.log("Click ME")
  }
  render() {
    return (
      <div>
        <button onClick={this.clickButton}>Click ME</button>
      </div>
    )
  }
}

export default ClassClick