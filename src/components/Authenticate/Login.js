import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Eye from "../../images/eye.png";
// import Modal from "react-modal";
// import ForgotPassword from "./ForgotPassword";



export default function Login({ setLoggedIn, setShowLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState("");

  let takeHome = useNavigate(); 

  const toggleShowPassword = () => setShowPassword(!showPassword);

  // const OpenSignup = () => setShowLogin(false);

  const handleSubmit = (event) => {
    event.preventDefault();
     fetch('https://book-api-6jbp.onrender.com/users/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify( userLogin )
    })
    .then (response => {
      if (response.ok) {
        takeHome('/home');
        setUserLogin({username: "", password: ""})
      }
      else {
        setError('Invalid username or password');
        setUserLogin({username: "", password: ""})
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
            value={userLogin.username}
            onChange={(e) => setUserLogin({...userLogin, username: e.target.value})}
          />
        </div>
        <div className="txt_field">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={userLogin.password}
            onChange={(e) => setUserLogin({...userLogin, password: e.target.value})}
          />
          <span className="show-password" onClick={toggleShowPassword}>
            <img style={{ width: "40px" }} src={Eye} alt="Show Password" />
          </span>
        </div>
        <div className="buttons">
          <button type="submit">Login</button>
          <button onClick={()=> takeHome('/signup') }>Create-Account</button>
        </div>
      </form>

    </div>
    
  );
}
