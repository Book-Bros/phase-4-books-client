import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
// import BookReview from "./BookReview";
import CreateReviews from "./CreateReviews";


function Book({setBooks}) {
    const [book, setBook] = useState({})
    const { id } = useParams();
    let taketobooks = useNavigate()

    useEffect(() => {
        fetch(`https://booksapi-73rd.onrender.com/books/${id}`)
        .then(res => res.json()).then((data) => {
            console.log(id)
            console.log(data)
            setBook(data)
        })
    }, [id])

    function deleteBook(){
        fetch(`https://booksapi-73rd.onrender.com/books/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        }).then(resp => {
            fetch('https://booksapi-73rd.onrender.com/books').then(response => response.json()).then(data => {
                setBooks(data)
                taketobooks('/books')
        })
        })

    }


    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img src={book.cover_image} width='300' alt={`Cover of ${book.title}.`} className='pt-2 pb-2 mr-auto ml-auto shadow' style={{ display: 'block' }} />
                </Col>
                <Col lg={true}>
                    <h2 className="header text-center pt-5">{book.title}</h2>
                    <h3 className="font-italic text-center">{book.author}</h3>
                    {/* <h3 className="font-italic text-center">{book.genres[0].name}</h3> */}
                    <p>{book.description}</p>
                    
                    {/* <BookReview book = {book}/> */}
                    <CreateReviews setBook = {setBook}/>

                    <Button variant="warning" className='shadow m-3' onClick={deleteBook}>Delete Book</Button>
                </Col>
            </Row>
        </Container>
    );

}

export default Book;