import React from "react";
// import "./Signup.css"

export default function Login({setLoggedIn, setShowLogin}){

const OpenSignup = () => {
    setShowLogin(false)
    console.log("going to signup")
}
const GoHome = () => {
    console.log("going to home")
    setLoggedIn(true)
}

    return(
        <div className="signup-card">
            <h1>Login</h1>
            <div className="txt_field">
                <label htmlFor="email">Email: </label>
                <input type="email" name="" id="" />
            </div>
            <div className="txt_field">
                <label htmlFor="password">Password: </label>
                <input type="email" name="" id="" />
            </div>
            <div className="buttons">
                <button onClick={GoHome}>Login</button>
                <button onClick={OpenSignup}>Create-Account</button>
            </div>

        </div>
    )
}
