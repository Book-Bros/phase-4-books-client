import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
// import Eye from "../../images/eye.png";
// import Modal from "react-modal";
// import ForgotPassword from "./ForgotPassword";



export default function Login({ setLoggedIn, setShowLogin }) {
  // const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  // const [error, setError] = useState("");

  let takeHome = useNavigate();

  // const toggleShowPassword = () => setShowPassword(!showPassword);

  // const OpenSignup = () => setShowLogin(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetch('https://booksapi-73rd.onrender.com/users/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(userLogin)
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         response.json().then(data => {
  //           takeHome('/home');
  //           setUserLogin({ username: "", password: "" })
  //         })
  //       }
  //       else {
  //         response.json().then(data => {
  //           setError('Invalid username or password');
  //           setUserLogin({ username: "", password: "" })
  //         })
  //       }
  //     })


  return (

    <div className="signup-card">
      <h1>Login-page</h1>
      {/* {error && <p className="error-message">{error}</p>} */}
      {/* <form onSubmit={handleSubmit}>
        <div className="txt_field">
          <label htmlFor="username">username: </label>
          <input
            type="text"
            placeholder="username"
            id="username"
            value={userLogin.username}
            onChange={(e) => setUserLogin({ ...userLogin, username: e.target.value })}
          />
        </div>
        <div className="txt_field">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={userLogin.password}
            onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })}
          />
          <span className="show-password" onClick={toggleShowPassword}>
            <img style={{ width: "40px" }} src={Eye} alt="Show Password" />
          </span>
        </div>
        <div className="buttons">
          <button type="submit">Login</button>
          <button onClick={() => takeHome('/signup')}>Create-Account</button>
        </div>
      </form> */}


      <form onSubmit={(e) => {
        e.preventDefault()
        fetch('https://booksapi-73rd.onrender.com/users/login', {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
        })
          .then(resp => resp.json())
          .then(data => {
            console.log(data)
            takeHome('/home')
          })
      }}>
        <input type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
        <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
        <input type="submit" value="Submit" />
      </form>
    </div>

  );
}
