import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Homme from "./Home";
import AddBook from "./AddBook";
import Books from "./Books";
import Book from "./Book";
import Profile from "./Profile";


export default function Main({setLoggedIn}) {


    return (
        <div>

            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homme />} />
                <Route path="/addbook" element={<AddBook />} />
                <Route path="/books" element={<Books />} />
                <Route path="/profile" element={<Profile setLoggedIn={setLoggedIn}/>} />
                <Route path="/books/:id" element={<Book />}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
