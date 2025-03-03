import React, { Component } from 'react'
import LifecycleB from './Lifecycle-child';

// lifecycle methods - Mounting, updating, unmounting, errorHandling.
// Mounting is to add a value to the DOM. 
// Updating is when there is changes to props or states
// static getDerivedStateFromProps -> when the state depends on the changes in props. should return null or updated state
// as render knows abt child componet execution goes there then only executes the componentDidMount
// shouldComponentUpdate dictates if it should rerender checking the props and states w the nextprops and nextStates
// getSnapshotBeforeUpdate gets prevProps and prevStates
export class Lifecycle extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "Santhosh"
    }
    console.log("Lifecycle Const")
  }

  static getDerivedStateFromProps(props, state){
    console.log("get derived state");
    return null;
  }
  shouldComponentUpdate() {
    console.log("Lifecycle Should COmponent Update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("Lifecycle get snapshot");
    return null;
  }
  componentDidUpdate(){
    console.log("Lifecycle component did update")
  }
  // componentDidMount(){
  //   console.log("component did mount")
  // }

  changeState = () => {
    this.setState({
      name: "Santhosh Srinivas"
    })
  }
  render() {
    console.log("lifecycle rendered")
    return (
      <div>
        <div>Lifecycle</div>
        <button onClick={this.changeState}>Changed State</button>
        <LifecycleB></LifecycleB>
      </div>
    )
  }
}

export default Lifecycle