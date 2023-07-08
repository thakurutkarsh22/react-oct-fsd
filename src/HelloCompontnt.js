import logo from './logo.svg';
import './App.css';

function HelloComponent(props) {

  const {name, standard} = props;

  console.log("debug props", props)

  return (
   <div>
      Hello guys  my name is {} and I study in asdasd {}.
   </div>
  );



  
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


