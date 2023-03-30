import React, { useState } from "react";
import Eye from "../../images/eye.png";
import Modal from "react-modal";
import ForgotPassword from "./ForgotPassword";

Modal.setAppElement("#root"); // this is needed for accessibility

export default function Login({ setLoggedIn, setShowLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

const handleForgotPasswordClose = () => {setShowForgotPassword(false);}; // hide forgot-password popup
const toggleShowPassword = () => {setShowPassword(!showPassword);};
const handleForgotPassword = () => {setShowForgotPassword(true);};  // show forgot-password popup
const OpenSignup = () => {setShowLogin(false);};

const handleLogin = async () => {
  if (!username || !password) {
    setError("Username or password cannot be blank.");
    return;
  }else {
    setError("");
  }
  try {
    const response = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      // credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      alert(`${data.message}`);
      setLoggedIn(true);

    }
  } catch (error) {
    console.error("Login failed:", error);
  }
};






return (
  <div className="signup-card">
    <h1>Login-page</h1>
    <div className="txt_field">
      <label htmlFor="email">Username: </label>
      <input type="text" placeholder="Username" id="username" value={username} onChange={e => setUsername(e.target.value)} />
    </div>
    <div className="txt_field">
      <label htmlFor="password">Password: </label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        id="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
      <span className="show-password" onClick={toggleShowPassword}>
        <img style={{ width: "40px" }} src={Eye} alt="Show Password" />
      </span>
    </div>
 {error && (<p style={{ color: "red" }}className="error">{error}</p>)}
    <div className="buttons">
      <button onClick={OpenSignup}>Create-Account</button>
      <button id="close" onClick={handleForgotPassword}>Forgot Password</button>
      <button onClick={handleLogin}>Login</button>
    </div>
    <Modal isOpen={showForgotPassword} onRequestClose={handleForgotPasswordClose} >
      <ForgotPassword onClose={handleForgotPasswordClose} />
    </Modal>
  </div>
);
}
