import { useState } from "react"


function Forms() {

    const defaultValOfForm = {
        firstName: "",
        lastName: "",
        email: "",
        phone:"",
        gender: "",
        dob: "",
        tnc: false
    }

    const [formState, setFormState] = useState(defaultValOfForm ) // saving the latest values in Obj -> send this Data to Server.


    // formState.email = "12" // mutation // this will create SIde effects 
    
    console.log(formState, "formState log")

    const onFormSubmition = () => {
        // Send this formState to your Server..... 


        // fetch("server" ,formState) // post // sideeffect -> useEffect
    }

    const changehandler = (event, key) => {
        const value = event.target.value
        console.log(value, key, "key value pair")

        console.log("form state debug", formState)
        setFormState((oldFormValue) => {
            return {
                ...oldFormValue,
                [key]: value,
            }
        })

        // setFormVal()
    }


    function ValidateTheForm(value, key) {
        
    }

    
    
    return (
        <>
        FORMS
            <form onSubmit={onFormSubmition}>
                <label>FirstName*</label>
                <input onChange={(event) => {changehandler(event, "firstName")}} type="text"></input>
                <br />

                <label>LastName</label>
                <input onChange={(event) => {changehandler(event, "lastName")}} type="text"></input>

                <br />


                <label>Email*</label>
                <input onChange={(event) => {changehandler(event, "email")}} type="text"></input>

                <br />


                <label>PhoneNo.*</label>
                <input onChange={(event) => {changehandler(event, "phone")}} type="number"></input>

                <br />

                <label>Gender*</label>
                <select onChange={(event) => {changehandler(event, "gender")}}>
                    <option value={1}>I am Male</option>
                    <option value={2}>I am Female</option>
                </select>

                <br />

                <label>DOB*</label>
                <input onChange={(event) => {changehandler(event, "dob")}} type="date" /> 

                <br />
                
                
                <input onChange={(event) => {changehandler(event, "tnc")}}  checked={formState.tnc} type="checkbox" /> 
                
                <label>Terms and conditions</label>
                <br />

                <input type="submit" />
            </form>

        </>
    )

}

export default Forms;


// Forms -> How To manage states
// Error State -> 
// Touch State in Form -> 
// validation ->


// Class Components -> 