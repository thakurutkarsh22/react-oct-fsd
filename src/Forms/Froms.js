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

    const defaultErrorState = {
        firstName: "",
        email: "",
        phone: "",
        dob: "",
    }

    const defaultTouchedState = {
        firstName: false,
        email: false,
        phone: false,
    }

    const [formState, setFormState] = useState(defaultValOfForm ) // saving the latest values in Obj -> send this Data to Server.

    const [errorState, setErrorState] = useState(defaultErrorState);

    const [touchedState, setTouchedState] = useState(defaultTouchedState); // UX 

    console.log(touchedState, "touchedState debug")

    
    console.log(formState, "formState log")

    const onFormSubmition = (event) => {
        event.preventDefault()
        // Send this formState to your Server..... 
        // Validte 





    const isFormValid  =  ValidateForm();

    if(isFormValid) {
        // send to the sever.
    } else {
        // do nothing ... popup 
    }



        // fetch("server" ,formState) // post // sideeffect -> useEffect
    }

    const onBlurHandler = (event, inputKey) => {
        let touchedObj = {} // this is fast
       
        touchedObj[inputKey] = true;        
        
        setTouchedState(old => {
            return {
               ...old,
               ...touchedObj
            }
        })


        // Update your setErrorState
    }

    const changehandler = (event, inputKey) => {
        const value = event.target.value
        console.log(value, inputKey, "key value pair")

        console.log("form state debug", formState)
        setFormState((oldFormValue) => {
            return {
                ...oldFormValue,
                [inputKey]: value,
            }
        })

        // validate my form 

        ValidateTheFormField(event, inputKey)
    }

    function ValidateForm() {
        let isFormValid = true;

        let errorObj = {}

        for(let inputState in formState) {
            if(formState[inputState]) {
                errorObj[inputState] = "asdasd"
                isFormValid = false;
            }
        }

        return isFormValid;

    }


    function ValidateTheFormField(event, inputKey) {
        
        let value = event.target.value ; // "utk1"

        let localError = {};

        // Validation for firstname ... 

        if(inputKey === "firstName") {
            const numberRegex = /.*[0-9].*/
            if(value && !value.match(numberRegex) ) {
                localError[inputKey] = "";
            } else if(value && value.match(numberRegex)) {
                localError[inputKey] = "name Sould be in String."
            } else {
                //  value is empty 
                localError[inputKey] = "Required"
            }
        }

        // validated for email 
        
        if(inputKey === "email") {
            const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

            if(value && value.match(emailRegex)) {
                localError[inputKey] = "";
            } else if (value && !value.match(emailRegex)) {
                localError[inputKey] = "Email should Be valid";
            }

        }


        // Validated for phone

        if(inputKey === "phone") { // usa ,+91, +1 
            if(value && isFinite(value) && value.length === 10 && Number(value) > 999999999 ) {
                localError[inputKey] = ""; 
            } else if(!(value && isFinite(value) && value.length === 10 && Number(value) > 999999999) ) {
                localError[inputKey] = "Enter valid Phone number"; 
            }
        }

        



        // Update the ERROR STATE 

        setErrorState(old => {
            return {
                ...old,
                ...localError
            }
        } )


    }

    
    return (
        <>
        FORMS
            <form onSubmit={onFormSubmition}>
                <label>FirstName*</label>
                <input 
                    onChange={(event) => {changehandler(event, "firstName")}} 
                    type="text"
                    onBlur={(event) => {onBlurHandler(event, "firstName")}}    
                >
                </input>
                <div style={{color: "red"}}>{errorState.firstName}</div>
                <br />
                <br />

                <label>LastName</label>
                <input onChange={(event) => {changehandler(event, "lastName")}} type="text"></input>
                {/* <div style={{color: "red"}}>Error</div> */}
                <br />
                <br />


                <label>Email*</label>
                <input 
                    onChange={(event) => {changehandler(event, "email")}} 
                    type="text"
                    onBlur={(event) => {onBlurHandler(event, "email")}}  
                ></input>
                <div style={{color: "red"}}>{touchedState.email && errorState.email}</div>

                <br />
                <br />


                <label>PhoneNo.*</label>
                <input 
                    onChange={(event) => {changehandler(event, "phone")}} 
                    type="number"
                    onBlur={(event) => {onBlurHandler(event, "phone")}} 
                    ></input>
                <div style={{color: "red"}}>{errorState.phone}</div>

                <br />
                <br />

                <label>Gender*</label>
                <select onChange={(event) => {changehandler(event, "gender")}}>
                    <option value={1}>I am Male</option>
                    <option value={2}>I am Female</option>
                </select>

                <br />
                <br />

                <label>DOB*</label>
                <input onChange={(event) => {changehandler(event, "dob")}} type="date" /> 

                <br />
                <br />
                
                
                <input onChange={(event) => {changehandler(event, "tnc")}}  checked={formState.tnc} type="checkbox" /> 
                
                <label>Terms and conditions</label>
                <br />
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