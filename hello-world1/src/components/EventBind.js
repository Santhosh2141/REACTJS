import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello',
    };
    this.clicked = this.clicked.bind(this);
  }
  clicked(){
    this.setState({
      message: 'GoodBye'
    })
    console.log(this)
  }
  clicked1 = ()=>{
    this.setState({
      message: 'GoodBye1'
    })
    console.log(this)
  }
  // if we call clicked as onclick = {this.clicked} Code breaks. as 'this' is not passed as an argument. 
  // so we need to bind it and pass it(NOT USED cus of performance implications) 
  // or use arraow functions (Can be used if not many NESTED children components)
  // or binding the event in the constructor which is mostly used (IDEAL)
  // or arrow function as a class property (Experimental but also correct)
  render() {
    return (
      <div>
        <div>
          {this.state.message}
        </div>
        {/* <button onClick={this.clicked.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clicked()}>Click</button> */}
        <button onClick={this.clicked}>Click</button>
        <button onClick={this.clicked1}>Click1</button>
      </div>
    )
  }
}

export default EventBind