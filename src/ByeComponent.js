import React from "react";



function ByeComponent(props) {

    const {user} = props;

//    return React.createElement("div", {}, "Data") // node

    return (
        <React.Fragment>
            <div>Bye !!!</div> 
            <div>{user}</div>
        </React.Fragment>
    )

}

/*
    React Fragments -> <> </> || <React.Fragment> </React.Fragment>  -> this is used when we want to return multiple roots from a 
    component 

    WE can USE DIV for this as well But DIV is un-necessary on the DOM. 
*/

export default ByeComponent;