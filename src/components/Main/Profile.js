import { BrowserRouter, Route, Routes } from "react-router-dom";
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
            <h1>Profile</h1>
            <button onClick={Logout}>logout</button>
        </div>
    )
}
