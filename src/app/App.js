import React, {useState} from 'react';
import Login from '../components/Authenticate/Login';
import Signup from '../components/Authenticate/Signup';
import Home from '../components/Home/Home';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  if (loggedIn === true) {
    return (
      <div className="App">
        <Home setLoggedIn={setLoggedIn}/>
      </div>
    );
  }else{
    return(
      <div className="App">
      <h2>Authentication-Page</h2>
      {showLogin ? (
      <Login setShowLogin={setShowLogin} setLoggedIn={setLoggedIn} />
      ) : (
      <Signup setShowLogin={setShowLogin} setLoggedIn={setLoggedIn} />
      )}
    </div>
    )
  }
}

export default App;
