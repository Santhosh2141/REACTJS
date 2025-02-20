import React from 'react'

function Person({person}) {
  return (
    <div>
      <h3>Hi. I'm {person.name}. I'm {person.age} years old. I'm a {person.skill}</h3>
    </div>
  )
}

export default Person;
