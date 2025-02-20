import React, { Component } from 'react'

export class UserGreeting extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    // Three ways to use if Else. First is rendering the whole page inside the if and else.
    // Second way is to render the msg and then use that msg in the return
    // third way is to use ternary operator
    
    // this way is acalled as the short circuit operator. if both are true then div will be displayed else itll be blank
    return (
      this.state.isLoggedIn && <div>Welcome Santhosh</div>
    )

    let msg ;
    return (
      this.state.isLoggedIn ? <div>Welcome Santhosh</div> : <div>Welcome Guest</div>
    )
    // if (this.state.isLoggedIn){
    //   msg = 'Welcome Santhosh';
    // } else {
    //   msg = 'Welcome Guest';
    // }
    // return (
    //   <div>
    //     <div>{msg}</div>
    //   </div>
    // )
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <div>Welcome Santhosh</div>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //       <div>Welcome Guest</div>
    //     </div>
    //   )
    // }
  }
}

export default UserGreeting