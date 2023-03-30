import React, { useState } from "react";
import Eye from "../../images/eye.png";
import "./Signup.css";

export default function Signup({ setShowLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPwd = event.target.value;
    setConfirmPassword(confirmPwd);
    if (confirmPwd !== password) {
      setError("Passwords do not match!");
    } else {
      setError("");
    }
  };

const handleSignup = () => {
    // create the user object with the correct properties
const newUser = {username: username,password: password,email: email,profile_image: profileImage};

    // send a POST request to the server with the user object in the body
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      return response.json();
    })
    .then(data => {
      console.log('Created user:', data);
      // do something with the response data if needed
    })
    .catch(error => {
      console.error(error);
      // handle the error if needed
    });
  };


  return (
    <div className="signup-card">
      <h1>Signup-page</h1>
      <div className="txt_field">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="txt_field">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          placeholder="Email-address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="txt_field">
        <label htmlFor="password">Password: </label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <span className="show-password" onClick={toggleShowPassword}>
          <img style={{ width: "40px" }} src={Eye} alt="Show Password" />
        </span>
      </div>
      <div className="txt_field">
        <label htmlFor="password">Confirm-Password: </label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div className="txt_field">
        <label htmlFor="profileImage">Profile Image: </label>
        <input
          type="text"
          placeholder="Profile Image Link (optional)"
          value={profileImage}
          onChange={(event) => setProfileImage(event.target.value)}
        />
      </div>
      <div className="buttons">
      <button onClick={() => setShowLogin(true)}>Go-To-Login</button>
      {error ? (
        <p style={{ color: "red" }}>Error:</p>
      ) : (
        <button onClick={handleSignup}>Signup</button>
      )}
    </div>
    </div>
  );
}
