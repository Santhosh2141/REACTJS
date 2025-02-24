import React from 'react'

const heading = {
  fontSize: '72px',
  color: 'Blue'
}
function Inline() {

  // css applies to the child component. so appStyles has error class in it. this is called in App.js but that css can be used in the child component as well. But the modules method wont work. so this prevents conflicts
  return (
    <div>
      <h1 className='error'>Error</h1>
      <h1 style={heading}>
        Inline-style
      </h1>
      
    </div>
  )
}

export default Inline