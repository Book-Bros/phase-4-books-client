import React, {useState} from 'react';
import Login from '../components/Authenticate/Login';
import Signup from '../components/Authenticate/Signup';
import Main from '../components/Main/Main';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [showLogin, setShowLogin] = useState(true);

  if (loggedIn === true) {
    return (
      <div className="App">
        <Main setLoggedIn={setLoggedIn}/>
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
