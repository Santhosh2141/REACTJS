import React from 'react'

// function FowardRef() {
//   return (
//     <div>
//       FowardRef: 
//       <input type='text'></input>
//     </div>

//   )
// }

const FowardRef = React.forwardRef((props,ref) => {
  // forwardRef takes a comp as a parameter.
  // func comp takes props as a parameter. when its passed to forwardRef it takes ref as a parameter too.
  // this ref attribute will point to the ref in the parent component
    return (
      <div>
        FowardRef: 
        <input type='text' ref={ref}></input>
      </div>
  
    )
  }
)

export default FowardRef