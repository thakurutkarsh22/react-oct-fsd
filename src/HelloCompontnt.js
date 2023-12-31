import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

class ABC {

}

function HelloComponent(props) {

  const [nameState, setName] = useState("")


  const {name, standard} = props;

  console.log("debug props", props)


  // UI -> User interface 
  return (
  <>
    <div style={{color: "red"}} className='abcd'>
        Hello guys  my name is {name} and I study in {standard}.
    </div>

    <h1 className='heading'>
      asdasd
    </h1>
    
    <button onClick={() => {
      setName("utkarsh")
    }}> SetName</button>

   </>
  );

  // return React.createElement("fragmenrt", {div, h1}, "Hello guys  my name is")
  // return React.createElement("h1", {}, "Hello guys  my name is")



  
}

export default HelloComponent;



/* JSX -> whatever is written inside the function return statement is converted to something like below
 React.createElement("div",{}, "hello Guys sasasas!")....

 In your jsx you can't return two roots.
*/


// Component -> HelloComponent function is a UI Component 


/*
  Props -> Are nothing but extra information provided to the component. 
*/

/*
  State -> But variable which needs to be stored

*/



/*
  STYLING : 1. Inline Styling 
  2. CSS file

*/



/*
  Difference Between Packages (React, React-Dom, React-Script)


  React -> UI Management (By breaking UI into Components).
  React-Dom -> This is responsibile for Showing the UI to the real DOM. 
  React-Script -> Enables the Build of the Project, to Start the project basically it contains script to start few things.

*/

