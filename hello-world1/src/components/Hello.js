import React from "react";

const Hello = () => {
  //THIS IS THE JSX version. JSX is an easier way of calling the React.createElement
  return ( 
    <div className='dummy-class'>
      <h1>Hello Santhosh</h1>
    </div>
  );


  //THIS IS THE NON JSX version
  // return React.createElement(
  //   'div',
  //   {
  //     id: 'hello',
  //     className: 'dummy-class'
  //   }, 
  //   React.createElement('h1',null, "Hello Santhosh"));     
  // takes 3 parametes. html tag, optional properties, children for the tag. It can have numerous children
}

export default Hello;