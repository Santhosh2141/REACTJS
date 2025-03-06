import React, { Component } from 'react'
import RegComp from './RegComp.js'
import PureComp from './PureComponent.js'
import MemoComp from './MemoComp.js'

// if parent is pure then children are pure too.
// wehn you mutate a list the pure component wont re render cuz the calues change but the loc doesnt so return a new obj for new state.
export class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: "Santhosh"
    }
  }
  componentDidMount() {
    setInterval(()=>{
      this.setState({
        name: "Santhosh Srinivas"
      })
    },2000)
  }
  render() {
    console.log("Parent Comp render")
    return (
      <div>
        Parent component
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    )
  }
}

export default ParentComp