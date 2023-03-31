import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
// import Modal from "react-modal";


export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState("");

  let takeHome = useNavigate();


  // const OpenSignup = () => setShowLogin(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://booksapi-73rd.onrender.com/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            console.log(data)
            takeHome('/home');
            setUser({ username: "", password: "" })
          })
        }
        else {
          response.json().then(data => {
            setError('Invalid username or password');
            setUser({ username: "", password: "" })
          })
        }
      })

    }


  return (

    <div className="signup-card">
      <h1>Login-page</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="txt_field">
          <label htmlFor="username">username: </label>
          <input
            type="text"
            placeholder="username"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="txt_field">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className="buttons">
        <button type="submit">Login</button>
          <button onClick={() => takeHome('/signup')}>Create-Account</button>
        </div>
      </form>
      </div>

  );
}

