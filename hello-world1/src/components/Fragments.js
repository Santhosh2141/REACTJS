import React from 'react'
import Tables from './Tables.js'

// allows grping child componets withot extra nodes
function Fragments() {
  return (
    <React.Fragment>
      <h1>Fragments</h1>
      <p>This is a fragment para</p>
      <Tables></Tables>
    </React.Fragment>
  )
}

export default Fragments