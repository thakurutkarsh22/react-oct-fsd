import { useState } from "react"
import ByeComponent from "./ByeComponent"
import HelloComponent from "./HelloCompontnt"
import IncrementDecrementComponent from "./IncementDecrementCounter/IncrementDecrementComponent"



function App() {

    // State .... name 
    const [name, setName] = useState("User")


    const changeNameHandler = () => {
        setName("Akash")
    }


    return (

        <>

            <ByeComponent user={name} />

            <IncrementDecrementComponent />

            {/* Button That changes the name....  */}

            <button onClick={changeNameHandler}>Change Name</button>
        </>
        
    )
}

export default App

{/* <HelloComponent name={"akash"} standard={"9th"}/> */}
    
    
    {/* <ByeComponent /> */}
    
    {/* <IncrementDecrementComponent /> */}