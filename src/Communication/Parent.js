import { useState } from "react";
import ChildCommunication from "./Child";


function ParentCommunicatioin() {

    const [info, setInfo] = useState("");

    let name = "akash" // this variable has been created in Parent 

    const childCommunicatonHandler = (info) => {
        console.log("parent Getting Info: ", info)

        // If you want to save the info... 
        setInfo(info)


    }

    return (
        <>
            <h1>{info}</h1>
            <div>Parent I am </div>

            <ChildCommunication user={name} childCommunicatonHandler={childCommunicatonHandler} />
        </>
    )

}


export default ParentCommunicatioin;