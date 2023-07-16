


function ChildCommunication(props){

    // childCommunicatonHandler: Treat it like as the Mobile given by the parent. 
    // If child need to provide info to Parent It need to DIal the Parent/ Execute this function.

    const {user, childCommunicatonHandler } = props 




    return(

        <>
        
            <div>I am child communication</div>
            <button onClick={() => { 
                childCommunicatonHandler("hey  parent i am lost")
                }
            }>Child Emergency</button>
        </>
    )

}

export default ChildCommunication;