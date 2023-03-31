import React from 'react';
import Login from '../components/Authenticate/Login';
import Signup from '../components/Authenticate/Signup';
// import Main from '../components/Main/Main';
// import Homme from "./Home";
import Home from '../components/Main/Home';
// import AddBook from "./AddBook";
import AddBook from '../components/Main/AddBook';
// import Books from "./Books";
import Books from '../components/Main/Books'
// import Book from "./Book";
import Book from '../components/Main/Book'
// import Profile from "./Profile";
import Profile from '../components/Main/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';

function App() {
    return(
      <BrowserRouter>
          <Routes>
              <Route path = "/" element = {<Login />}/>
              <Route path='/signup' element={<Signup />} />
              <Route path="/home" element={<Home />} />
                <Route path="/addbook" element={<AddBook />} />
                <Route path="/books" element={<Books />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/books/:id" element={<Book />}/>
          </Routes>
      </BrowserRouter>
    );
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [showLogin, setShowLogin] = useState(true);

  // if (loggedIn === true) {
  //   return (
  //     <div className="App">
  //       <Main setLoggedIn={setLoggedIn}/>
  //     </div>
  //   );
  // }else{
  //   return(
  //     <div className="App">
  //     <h2>Authentication-Page</h2>
  //     {showLogin ? (
  //     <Login path="/login" setShowLogin={setShowLogin} setLoggedIn={setLoggedIn} />
  //     ) : (
  //     <Signup path="/signup" setShowLogin={setShowLogin} setLoggedIn={setLoggedIn} />
  //     )}
  //   </div>
  //   )
  // }
}

export default App;
