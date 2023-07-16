


function BeautifulWrapper(props) {

    const {children} = props

    const {name} = props
    let number = 20

    console.log("parent props", props)

    return (

        <>
            <div>
                I am a parent ___ of {name}
            </div>

            <div style={{color: "red"}}>
                {children}
            </div>
            {number}
            
        </>
       


    )
}

export default BeautifulWrapper;


/*
    This Wrapper component is known as Higher Order Component .

    Will Accept A compoent and 


*/

/*
    TO Make the Capability to show the childrens 

*/