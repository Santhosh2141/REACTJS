import React from 'react'

function ChildComponent(props) {
  const { greetHandler } = props
  return (
    <div>
      {/* using arrowFunction we can pass a parameter from the child to the parent component */}
      <button onClick={() => {greetHandler('child')}}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent