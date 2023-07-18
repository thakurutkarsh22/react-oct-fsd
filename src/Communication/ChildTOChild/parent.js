import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import styles from './Child.module.css'


function Parent() {

    const [info, setIncOrDec] = useState("");

    const child1CommunicationHandler = (info) => {
        console.log("parent info: ", info);
        
        setIncOrDec(info) // Up to the parent 
    }

    return (
        <>
            <div className={styles.parentContainer}>
                <Child1 child1CommunicationHandler={child1CommunicationHandler} />
                    I am parent
                <Child2 isIncOrDec={info}/>
            </div>
            
        </>
    )

}

export default Parent