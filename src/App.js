import { useState } from "react"
import ByeComponent from "./ByeComponent"
import HelloComponent from "./HelloCompontnt"
import IncrementDecrementComponent from "./IncementDecrementCounter/IncrementDecrementComponent"
import BeautifulWrapper from "./childrenProp/BueatifulWrapper"
import Child from "./childrenProp/Child"



function App() {

    // State .... name 
    const [name, setName] = useState("User")


    const changeNameHandler = () => {
        setName("Akash")
    }


    return (

        <>

            {/* <ByeComponent user={name} />

            <IncrementDecrementComponent />


            <button onClick={changeNameHandler}>Change Name</button> */}



            {/* Children Props ....  */}


            {/* <Parent name={"utkarsh"}>
                <Child />
                <Child />
                <h1>asaasdddasda</h1>
                <p>sasdasda asdsad para</p>
            </Parent> */}

            <BeautifulWrapper name={"utkarsh"}>
                <Child />
                <Child />
            </BeautifulWrapper>

            

            
{/* 
            <div>
                <h1>Headi1</h1>
                <h1>Headi1</h1>
                <h1>Headi1</h1>
                <h1>Headi1</h1>
                <p>Para</p>
            </div> */}
            
        </>
        
    )
}

export default App

{/* <HelloComponent name={"akash"} standard={"9th"}/> */}
    
    
    {/* <ByeComponent /> */}
    
    {/* <IncrementDecrementComponent /> */}