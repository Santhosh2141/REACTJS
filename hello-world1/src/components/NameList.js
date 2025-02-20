import React from 'react';
import Person from './Person.js';

// the list is rendered in a separate file and the Person html is rendered in another file.
// we pass this person field as a prop to the Person component.

function NameList() {
  const names = ['Santhosh', 'Madhu', 'Meena'];
  // each item should have a prop called key and that key should be unique to the list
  // key prop is necessary for list rendering. but this key component cant be accessed in the child component
  // keys help in easier development of lists when items are added to it so that new items make efficient addition
  const persons = [
    {
      id: 1,
      name: 'Ranjani Suresh',
      age: 23,
      skill: 'HR',
      colg: 'MOP'
    },{
      id: 2,
      name: 'Santhosh Srinivas',
      age: 23,
      skill: 'SDE',
      colg: 'SSN'
    }
  ]

  // there are some issues when we use index as a key. so there are certain conditions to when to use index as key.
  // 1) Use index when we dont have any other unique value. 2) Use index id the list doesnt change. 3) Use index if we dont perform any Filter operations or reordering to the list. In all the 3 cases use index as a key.
  
  const personsRender = persons.map((person) => <Person key = {person.id} person={person}></Person> )

  const nameRender = names.map((name,index)=><h1  key = {index}>{name}</h1>);
  return (

    <div>
      <div>
        {
          nameRender
        }
      </div>
      <div>
        {
          personsRender
        }
      </div>
    </div> 
  )
}

export default NameList