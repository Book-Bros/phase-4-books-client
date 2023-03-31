import {React, useState, useEffect} from "react";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";



export default function AddBook({setBooks, books}) {
    let takebooks = useNavigate();
    let [newBook, setNewBook] = useState({
      title: "",
      author: "",
      description: "",
      cover_image: "",
      genre_id: [1]
    });
  
    let [genres, setGenre] = useState([]);
  
    useEffect(() =>{
      fetch('https://booksapi-73rd.onrender.com/genres')
        .then((resp) => resp.json())
        .then((data) => setGenre(data))
    },
      []
    );
  
    let genresOption = genres.map((genre) => (
      <option key={genre.id} value={genre.id}>
        {genre.name}
      </option>
    ));
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("https://booksapi-73rd.onrender.com/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: newBook.title, author: newBook.author, description: newBook.description, cover_image: newBook.cover_image, genre_id: [+(newBook.genre_id[0])]}),
      })
      .then(resp => {
        setNewBook({ title: "", author: "", description: "", cover_image: "", genre_id: [1] })
        fetch('https://booksapi-73rd.onrender.com/books').then(response => response.json()).then(data => {
            setBooks(data)
            takebooks('/books')
        })
        
        }
      )
    }
  
    return (
      <div>
        <Navbar />
        <h1>Add-book</h1>
  
        <Container className="w-50">
          <h2 className="header text-center p-3">Add a New Book</h2>
          <Form onSubmit={(e) => handleSubmit(e)} className="mx-auto">
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newBook.title}
                onChange={(e) =>
                  setNewBook({ ...newBook, title: e.target.value })
                }
                placeholder="Title"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="genre">
              <Form.Label>Genre</Form.Label>
              <select name="genre" onChange={(e) => setNewBook({ ...newBook, genre_id: [e.target.value] }) } value={newBook.genre_id[0]}>{genresOption}</select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="author">
              <Form.Label>Author Name</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={newBook.author}
                onChange={(e) =>
                  setNewBook({ ...newBook, author: e.target.value })
                }
                placeholder="Author"
                required
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={newBook.description}
                onChange={(e) =>
                  setNewBook({ ...newBook, description: e.target.value })
                }
                style={{ height: "100px" }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="image_url">
              <Form.Label>Cover Image URL</Form.Label>
              <Form.Control
                type="text"
                name="cover_image"
                value={newBook.cover_image}
                onChange={(e) =>
                  setNewBook({ ...newBook, cover_image: e.target.value })
                }
                required
              />
            </Form.Group>
            <div className="d-grid gap-2 col-6 mx-auto">
              <Button variant="secondary" type="submit" className="m-auto shadow">
                CREATE
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
