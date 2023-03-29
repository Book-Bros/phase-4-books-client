import React from "react";


export default function Home({setLoggedIn}) {

const Logout = () => {
        console.log("Logged out")
        setLoggedIn(false)
}

    return (
        <div>
            <h1>Home</h1>
            <button onClick={Logout}>logout</button>
        </div>
    )
}
