import React, { useState } from "react";
import "./forgot.css"; // Import CSS styles for the modal

export default function ForgotPassword({ onClose }) {
  const [email, setEmail] = useState("");

  const SendMail = () => {
    // Send an email to the entered email address
    console.log("send email to", email);
    onClose(); // close the pop-up
  };

  return (
    <div className="modal-background">
      <div className="signup-card">
        <h1>Forgot Password</h1>
        <div className="txt_field">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            placeholder="Email-address"
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button onClick={SendMail}>Send Email</button>
          <button id="close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
