import { useState } from "react";
import ByeComponent from "./ByeComponent";
import HelloComponent from "./HelloCompontnt";
import IncrementDecrementComponent from "./IncementDecrementCounter/IncrementDecrementComponent";
import BeautifulWrapper from "./childrenProp/BueatifulWrapper";
import Child from "./childrenProp/Child";
import StudentDetail from "./StudentMarksComponent/StudentDetailComponent";
import Hello from "./ClassComponentIntro/BasicClass";
import MultipleState from "./MultipleState/MultipleState";
import ParentCommunicatioin from "./Communication/ChildToParent/Parent";
import Parent from "./Communication/ChildTOChild/parent";
import Forms from "./Forms/Froms";
import { Formik } from "formik";
import FormikForm from "./Forms/FormikForm";
import Macbook from "./ASSIGNMENTS/BuyMeMacBook";
import PokeApiFun from "./Pokemon/PokeApiFunc";
import IncDecCounterClass from "./ClassComponentIntro/IncDecCounter";
import HooksExplained from "./FuncationalCOmponentIntro/HooksExplained";
import LifeCycle from "./ClassComponentIntro/LifeCycle";
import PokeApiClass from "./Pokemon/PokeApiClass";
import CounterRef from "./UnderstandingRef/BasicRef/CounterRef";
import FormUi from "./UnderstandingRef/FormUI/FormUI";
import PortalDialogBox from "./Portal/Portal";
import CounterReducer from "./ClassComponentIntro/IncDecCounterReducer";
import BasicComponent from "./Performance/basics/basics";
import ParentPerfromance from "./Performance/ReRenderingExample/Parent";

function App() {
  // State .... name
  const [name, setName] = useState("User"); // This info is of parent

  const [unmountComp, setunmountComp] = useState(true);

  const studentData = [
    { id: 1, name: "utkarsh", grade: 5, year: 2 },
    { id: 2, name: "AKASH", grade: 8, year: 1 },
    { id: 3, name: "Rohit", grade: 3, year: 2 },
    { id: 4, name: "Aman", grade: 7, year: 3 },
    { id: 5, name: "Akshita", grade: 2, year: 4 },
    { id: 6, name: "Ankit", grade: 10, year: 4 },
  ];

  const changeNameHandler = () => {
    setName("Akash");
  };

  // UI - Render method
  return (
    <>
      {/* Bye component is child, App component is the PArent */}
      {/* Parent talks to child Via the Props...  */}
      {/* <ByeComponent user={name} /> */}
      {/* <IncrementDecrementComponent /> */}
      {/* <button onClick={changeNameHandler}>Change Name</button> */}
      {/* Children Props ....  */}
      {/* <Parent name={"utkarsh"}>
                <Child />
                <Child />
                <h1>asaasdddasda</h1>
                <p>sasdasda asdsad para</p>
            </Parent> */}
      {/* <BeautifulWrapper name={"utkarsh"}>
                <Child />
                <Child />
            </BeautifulWrapper> */}
      {/* 
            <div>
                <h1>Headi1</h1>
                <h1>Headi1</h1>
                <h1>Headi1</h1>
                <h1>Headi1</h1>
                <p>Para</p>
            </div> */}
      {/* Student Detail Card */}
      {/* <StudentDetail name={"utkarsh"} grade={5} year={4}/>
            <StudentDetail name={"Akash"} grade={3} year={3}/>
            <StudentDetail name={"Amit"} grade={2} year={2}/>
            <StudentDetail name={"Chandan"} grade={1} year={1}/>
            <StudentDetail name={"Aditya"} grade={9} year={1}/>
            <StudentDetail name={"Aditya"} grade={9} year={1}/> */}
      {/* {studentData.map((student, index) => {
                const {name, grade, year, id} = student;
                
                return <StudentDetail key={index} name={name} grade={grade} year={year}/>
            })} */}
      {/* Key Props should be unique for each Child in the list 
                Key props is used for the Performance only (By react)


                We can use Index as key BUT ...... it is not advisable. 
                Bec there is some functionality glitch 

                read this article: https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
            
            */}
      {/* INTRO TO CLASS COMPOENTN */}
      {/* <Hello />

            <MultipleState /> */}
      {/* Parent to child & Child to parent Communication */}
      {/* <ParentCommunicatioin /> */}
      {/* child to child Communication  */}
      {/* <Parent /> */}
      {/* FORMS */}
      {/* <Forms /> */}
      {/* <FormikForm /> */}
      {/* ASSIGNMENT */}
      {/* <Macbook /> */}
      {/* Pokemon APi  */}
      {/* {unmountComp && <PokeApiFun />} */}

      {/* // <button onClick={() => setunmountComp((old) => !old)}>
      //   unmountComponent
      // </button> */}
      {/* Class compoenent Set state, props, state */}
      {/* <IncDecCounterClass name={"akash"} rollNumber={12} /> */}
      {/* Hooks explained */}
      {/* <HooksExplained /> */}
      {/* {unmountComp && <LifeCycle />}
      <button onClick={() => setunmountComp((old) => !old)}>
        unmountComponent
      </button>
      App component */}

      {/* <PokeApiClass /> */}

      {/* UNDERSTANDING REF */}

      {/* <CounterRef /> */}

      {/* <FormUi /> */}

      {/* USE REDUCER EXPLANATION */}

      {/* <CounterReducer /> */}

      {/* PERFORMANCE */}

      {/* <BasicComponent /> */}

      <ParentPerfromance />
    </>
  );
}

export default App;

{
  /* <HelloComponent name={"akash"} standard={"9th"}/> */
}

{
  /* <ByeComponent /> */
}

{
  /* <IncrementDecrementComponent /> */
}
