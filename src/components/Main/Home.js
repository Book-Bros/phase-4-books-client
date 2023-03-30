import React from "react";
import Navbar from "../navbar/Navbar";


export default function Home({setLoggedIn}) {

const Logout = () => {
        console.log("Logged out")
        setLoggedIn(false)
}

    return (
        <div>
            <Navbar />
            <h1>Home</h1>

        </div>
    )
}
