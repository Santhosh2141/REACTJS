import React, { Component } from 'react'

export class Refs extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = element => {
      this.cbRef = element;
    }
  }
  componentDidMount(){
    // this.inputRef.current.focus();
    // we do if for cb cuz it calls Mount w a value and calls unmount when null. current is not reqd
    if (this.cbRef) {
      this.cbRef.focus();
    }
    // when this comp is created the input field is focussed
    // console.log(this.inputRef);
  }
  clickHandler(){
    let inputtedValue = this.inputRef.current.value;
    let inputtedCbValue = this.cbRef.value;
    alert(`Hey ${inputtedCbValue}`);
  }
  render() {
    return (
      <React.Fragment>
        Refs
        <div>
          {/* <form onSubmit={() => {this.clickHandler()}}> */}
            <input type = "text" ref={this.inputRef}></input>
            <input type = "text" ref={this.setCbRef}></input>
            <button onClick={() => {this.clickHandler()}} type='submit'>Submit Name</button>
          {/* </form> */}
        </div>
      </React.Fragment>
    )
  }
}

export default Refs