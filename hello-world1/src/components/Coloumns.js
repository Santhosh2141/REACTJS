import React from 'react'

// td cant appear inside div tag so we use fragemtns
function Coloumns() {
  const items = [1,2,3]
  return (
    <React.Fragment>
      {
        items.map(item => (
          <React.Fragment key={item.id}>
            <h1>Title</h1>
            <p>{item.id}</p>
          </React.Fragment>
        ))
      }
      <td>
        Name
      </td>
      <td>
        Santhosh
      </td>
    </React.Fragment>
  )
}

export default Coloumns