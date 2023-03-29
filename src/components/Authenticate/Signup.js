import React, {useState} from "react";
import "./Signup.css"
import Eye from "../../images/eye.png";

export default function Signup({setShowLogin}){
const [showPassword, setShowPassword] = useState(false);

const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

    function OpenLogin() {
        setShowLogin(true)
        console.log("going to Login")
    }

    return(
        <div className="signup-card">
            <h1>Signup-page</h1>
            <div className="txt_field">
                <label htmlFor="username">Username: </label>
                <input type="email" placeholder="Username" />
            </div>
            <div className="txt_field">
                <label htmlFor="email">Email: </label>
                <input type="email"placeholder="Email-address"  />
            </div>
            <div className="txt_field">
                <label htmlFor="password">Password: </label>
                <input type={showPassword ? "text" : "password"} placeholder="Password"  />
            <span className="show-password" onClick={toggleShowPassword}>
                <img style={{width: "40px"}} src={Eye} alt="Show Password"/>
            </span>
            </div>
            <div className="txt_field">
                <label htmlFor="password">Confirm-Password: </label>
                <input type={showPassword ? "text" : "password"} placeholder="Confirm-password" />
            <span className="show-password" onClick={toggleShowPassword}>
                <img style={{width: "40px"}} src={Eye} alt="Show Password"/>
            </span>
            </div>
            <div className="buttons">
                <button onClick={OpenLogin}>Signup</button>
                <button onClick={OpenLogin}>Go-To-Login</button>
            </div>

        </div>
    )
}



