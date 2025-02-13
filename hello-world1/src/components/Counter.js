import React, {Component} from "react";

class Counter extends Component{

  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
  incrementCount(){
    // this.setState({
    //   count: this.state.count+1,
    // }, ()=>{
    //   console.log("CallBack: " + this.state.count);
    // })
    this.setState((prevState,props)=>({
      // when we pass it as a function it has access to the prev state.
      // the second argument this function takes is props/
      count: prevState.count + Number(props.value)
      }), 
      console.log(this.state.count, Number(this.props.value))
    )
    // setState is asynchronous. so console.log executes first. 
    // setState has a second parameter which takes a callback fucntion
    console.log("Non-CallBack: " + this.state.count);
  }
  incrementFive(){
    // Forbetter operation React runs all the setStates of a call at the same time. so instead of object we pass a function to setState call 
    let i = 0;
    while (i < 5){
      this.incrementCount();
      i++;
    }
  }
  render(){
    return(
      <div>
        count {this.state.count}
        <div>
          <button onClick={() => this.incrementCount()}>Increase Button</button>
        </div>
      </div>
    )
  }
}

export default Counter;