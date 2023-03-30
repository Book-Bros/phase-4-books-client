import React from "react";
import Navbar from "../navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function Home({setLoggedIn}) {

const Logout = () => {
        console.log("Logged out")
        setLoggedIn(false)
}

    return (
        <div>
            <Navbar />
            <BrowserRouter>
            <Routes>
                <Route path/>

            </Routes>
            </BrowserRouter>
        </div>
    )
}
