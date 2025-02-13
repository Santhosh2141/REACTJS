import React from "react";


/* THIS IS A FUNCTIONAL COMPONENT
Use these components As much as poss. Mainly responsible for UI. ther were stateless but after Hooks they are stateful as well

export function Greet() {
   return <h1>Hello Santhosh</h1>
 } */

export const Greet = props => {
  console.log(props);
  return (
    <div>
      <h1>FC Hello {props.name} a.k.a {props.heroName}</h1> 
      {props.children}
    </div>
    // JSX can have only 1 wrapper elment within it. so we put it inside a div tag
  );
}
// This method is called as a Named export. SO i have to import w same name

// const Greet1 = () => <h1>Hello Santhosh</h1> ;
// export default Greet1;
// This is called a Defualt Export. So i can imprt w any name