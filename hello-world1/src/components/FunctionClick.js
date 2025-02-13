import React from 'react'

function FunctionClick() {

  // in React we can have a function inside a Functional Component
  function clickHandler(){
    console.log("clicked")
  }

  // NOTE: in the onClick we dont use parantheses. if we use clickHandler() instead of clickHandler
  // it becomes a function call and does not work when we click
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick