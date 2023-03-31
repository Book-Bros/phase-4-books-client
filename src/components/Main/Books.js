import React, {useState } from "react";
import Navbar from "../navbar/Navbar";
import Modal from "react-modal";
import { Container, Row, Col, } from 'react-bootstrap';
import BookItem from "./BookItem";
import BookReview from "./BookReview";


export default function Books({setBooks, books}) {
    const [showBookReview, setShowBookReview] = useState(false);
    // const [books, setBooks] = useState([]);

  
    /**Convert each book to a list item (component) */
    const element = books.map((book) => {
      return <Col key={book.id} className="d-flex">
        <BookItem key={book.id} id={book.id} author={book.author} cover_image={book.cover_image} />
      </Col>
    })
  
    const handleBookReviewOpen = () => {
      setShowBookReview(true);
    };
  
    const handleBookReviewClose = () => {
      setShowBookReview(false);
    };
  
  
    return (
      <div>
        <Navbar />
        <h1>Books</h1>
        <button onClick={handleBookReviewOpen}>Book-review</button>
        <Modal isOpen={showBookReview} onRequestClose={handleBookReviewClose}>
          <BookReview onClose={handleBookReviewClose} />
        </Modal>
  
        <Container fluid>
          <Row xs={1} md={2} lg={4} xl={6} className='g-8'>
            {element}
          </Row>
        </Container>
      </div>
    );
  }
  