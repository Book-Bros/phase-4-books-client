import {React, useEffect, useState} from 'react';
import Login from '../components/Authenticate/Login';
import Signup from '../components/Authenticate/Signup';
import Home from '../components/Main/Home';
import Books from '../components/Main/Books'
import Book from '../components/Main/Book'
import AddBook from '../components/Main/AddBook';
import Profile from '../components/Main/Profile'
import ReviewUpdate from '../components/Main/ReviewUpdate';
import UpdateBook from '../components/Main/UpdateBooks';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  let [isCurrentlyLoggedIn, setIsCurrentlyLoggedIn] = useState(false)
  let [idCurrentUser, setIdCurrentUser] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/users/checklogin', {
      method: 'GET',
      credentials: "include"
    }).then((response) => {

      if(response.ok){
        response.json().then(data => {
          setIsCurrentlyLoggedIn(true)
          setIdCurrentUser(data.id)
          // console.log(data)
        })
        
      }else{

      } 
    })
  }, [])


  return (
    <BrowserRouter>
    <Routes>
        <Route path = "/" element = {<Login setIsCurrentlyLoggedIn={setIsCurrentlyLoggedIn} setIdCurrentUser={setIdCurrentUser} />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/books" element={<Books />} />
        <Route path="/profile" element={<Profile setIsCurrentlyLoggedIn={setIsCurrentlyLoggedIn} setIdCurrentUser={setIdCurrentUser} />} />
        <Route path="/books/:id" element={<Book idCurrentUser={idCurrentUser}/>}/>
        <Route path="/books/:bookid/reviews/:reviewid/update"  element={< ReviewUpdate />} />
        <Route path="/books/:id/update" element={<UpdateBook />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
