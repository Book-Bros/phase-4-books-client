import React, {useState} from 'react';
import Login from '../components/Authenticate/Login';
import Signup from '../components/Authenticate/Signup';
import Home from '../components/Home/Home';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  if (loggedIn==true) {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }else{
    return(
      <div className="App">
      <h2>Login-app</h2>
      <Login />
      <Signup />
    </div>
    )
  }
}

export default App;
