


function Parent(props) {

    const {children} = props

    let number = 20

    console.log("parent props", props)

    return (

        <>
            <div>
                I am a parent 
            </div>

            <div style={{color: "red"}}>
                {children}
            </div>
            
            {number}
            
        </>
       


    )
}

export default Parent;


/*
    TO Make the Capability to show the childrens 

*/