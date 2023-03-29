import React from "react";

export default function Signup(){

    function OpenLogin() {
        console.log("going to Login")
    }

    return(
        <div>
            <h1>Signup</h1>
            <button onClick={OpenLogin}>Signup</button>
        </div>
    )
}
