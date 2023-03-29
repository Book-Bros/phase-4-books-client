import React from "react";

export default function Login({setLoggedIn}){

const OpenSignup = () => {
    console.log("going to signup")
}

const GoHome = () => {
    console.log("going to home")
    setLoggedIn(true)
}

    return(
        <div>
            <h1>Login</h1>
            <button onClick={OpenSignup}>Create-Account</button>
            <button onClick={GoHome}>Login</button>
        </div>
    )
}
