import React from 'react'

// td cant appear inside div tag so we use fragemtns
function Coloumns() {
  const items = [{
    id: 1,
    name: "Santhosh"
  },{
    id: 2,
    name: "Srinivas"
  },{
    id: 3,
    name: "Lakshmanan"
  }]
  return (
    <React.Fragment>
      {
        items.map((item,index) => (
          <React.Fragment key={index}>
            <td>
              <div><h1>Title</h1></div>
              <div>{item.name}</div>
            </td>
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