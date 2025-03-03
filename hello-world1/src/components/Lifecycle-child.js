import React, { Component } from 'react'


// lifecycle methods - Mounting, updating, unmounting, errorHandling.
// Mounting is to add a value to the DOM. 
// static getDerivedStateFromProps -> when the state depends on the changes in props
export class LifecycleB extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "Santhosh"
    }
    console.log("Lifecycle Child Const")
  }

  static getDerivedStateFromProps(props, state){
    console.log("Lifecycle Child get derived state")
    return null;
  }
  shouldComponentUpdate() {
    console.log("Lifecycle child Should COmponent Update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("Lifecycle child get snapshot");
    return null;
  }
  componentDidUpdate(){
    console.log("Lifecycle child component did update")
  }
  // componentDidMount(){
  //   console.log("Lifecycle Child component did mount")
  // }
  render() {
    console.log("Lifecycle Child rendered")
    return (
      <div>Lifecycle Child</div>
    )
  }
}

export default LifecycleB