import React from "react";


export default function Home() {

const Logout = () => {
        console.log("Logged out")
}

    return (
        <div>
            <h1>Home</h1>
            <button onClick={Logout}>logout</button>
        </div>
    )
}
