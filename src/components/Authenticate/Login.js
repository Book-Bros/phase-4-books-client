import React from "react";

export default function Login(){

const OpenSignup = () => {
    console.log("going to signup")
}

const GoHome = () => {
    console.log("going to home")
}

    return(
        <div>
            <h1>Login</h1>
            <button onClick={OpenSignup}>Create-Account</button>
            <button onClick={GoHome}>Login</button>
        </div>
    )
}
