import React from 'react'


// Pure Components : CLass COmponent :: Memo : Functional Component
// Memo is a higher order component. 
function MemoComp({name}) {
  console.log("RENDERING MEMO COMPONENT")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)