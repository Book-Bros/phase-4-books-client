
import React from "react";
import Navbar from "../navbar/Navbar";


export default function Profile({setLoggedIn}) {

const Logout = async () => {
    const response = await fetch('http://localhost:3000/users/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });

    if (response.ok) {
      const data = await response.json();
      alert(`${data.message}`);
    }
    setLoggedIn(false);
  }

    return (
        <div>
            <Navbar />
            <h1>Profile</h1>
            <button onClick={Logout}>logout</button>
        </div>
    )
}
