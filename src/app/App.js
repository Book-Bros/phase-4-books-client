import React from 'react';
import Login from '../components/Authenticate/Login';
import Signup from '../components/Authenticate/Signup';
import Home from '../components/Main/Home';
import Books from '../components/Main/Books'
import Book from '../components/Main/Book'
import AddBook from '../components/Main/AddBook';
import Profile from '../components/Main/Profile'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {

  return (
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
}

export default App;
