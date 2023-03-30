
import React from "react";
import Navbar from "../navbar/Navbar";


export default function Profile({setLoggedIn}) {

const Logout = () => {
        console.log("Logged out")
        setLoggedIn(false)
}

    return (
        <div>
            <Navbar />
            <h1>Profile</h1>
            <button onClick={Logout}>logout</button>
        </div>
    )
}
