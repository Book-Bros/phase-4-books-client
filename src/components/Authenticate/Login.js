import React, { useState } from "react";
import Eye from "../../images/eye.png";
import Modal from "react-modal";
import ForgotPassword from "./ForgotPassword";

Modal.setAppElement("#root"); // this is needed for accessibility

export default function Login({ setLoggedIn, setShowLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

const toggleShowPassword = () => {setShowPassword(!showPassword);};
const handleForgotPassword = () => {setShowForgotPassword(true);};  // show forgot-password popup
const handleForgotPasswordClose = () => {setShowForgotPassword(false);}; // hide forgot-password popup
const OpenSignup = () => {setShowLogin(false);};

  const handleLogin = () => {
    setLoggedIn(true);
  };


  return (
    <div className="signup-card">
      <h1>Login-page</h1>
      <div className="txt_field">
        <label htmlFor="email">Email: </label>
        <input type="email" placeholder="Email-address" id="" />
      </div>
      <div className="txt_field">
        <label htmlFor="password">Password: </label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          id="password"
        />
        <span className="show-password" onClick={toggleShowPassword}>
          <img style={{ width: "40px" }} src={Eye} alt="Show Password" />
        </span>
      </div>
      <div className="buttons">
        <button onClick={handleLogin}>Login</button>
        <button id="close" onClick={handleForgotPassword}>Forgot Password</button>
        <button onClick={OpenSignup}>Create-Account</button>
      </div>
      <Modal isOpen={showForgotPassword} onRequestClose={handleForgotPasswordClose} >
        <ForgotPassword onClose={handleForgotPasswordClose} />
      </Modal>
    </div>
  );
}
