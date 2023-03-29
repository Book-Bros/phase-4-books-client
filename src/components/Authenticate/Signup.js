import React from "react";

export default function Signup({setShowLogin}){

    function OpenLogin() {
        setShowLogin(true)
        console.log("going to Login")
    }

    return(
        <div>
            <h1>Signup</h1>
            <div className="txt_field">
                <label htmlFor="username">Username: </label>
                <input type="email" name="" id="" />
            </div>
            <div className="txt_field">
                <label htmlFor="email">Email: </label>
                <input type="email" name="" id="" />
            </div>
            <div className="txt_field">
                <label htmlFor="password">Password: </label>
                <input type="email" name="" id="" />
            </div>
            <div className="txt_field">
                <label htmlFor="password">Confirm-Password: </label>
                <input type="email" name="" id="" />
            </div>
            <button onClick={OpenLogin}>Signup</button>
            <button onClick={OpenLogin}>go-to-Login</button>
        </div>
    )
}
