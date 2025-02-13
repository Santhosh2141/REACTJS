import React, {Component} from "react";

class Message extends Component {
  constructor(){
    super();    // inheriting all the vars of Component
    this.state = {
      message: 'Welcome Visitor',
    };
  }

  changeMessage(){
    this.setState({
      message: 'Thank You for Subscribing'
    })   // setState accepts an object which is the new state of the var;
  }
  // React always returns only 1 html element. 
  render(){
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={ () => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Message;