import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import BookReview from "./BookReview";
import CreateReviews from "./CreateReviews";




function Book({setBooks}) {
    const [book, setBook] = useState({ })
    const [reviews, setReviews] = useState([])
    const { id } = useParams();
    let taketobooks = useNavigate()
    // let reviews;

    useEffect(() => {
        fetch(`http://localhost:3000/books/${id}`,{
            method: 'GET',
            credentials: "include"
        })
        .then(res => res.json()).then((data) => {
            console.log(id)
            console.log(data.reviews)
            setBook(data)
            setReviews(data.reviews)
            // taketobooks(`/books/${id}`)



        })
    }, [id])

    function deleteBook(){
        fetch(`http://localhost:3000/books/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            credentials: "include"
        }).then(resp => {
            // fetch('http://localhost:3000/books').then(response => response.json()).then(data => {
                // setBooks(data)
                taketobooks('/books')
        // })
        })

    }

let reviewsLi;

    if(reviews.length > 0) {
        reviewsLi = reviews.map((review) => {  return <BookReview review={review} key={review.id}/>  })
    }else{
        reviewsLi = <li>Be the first to add Review</li>
    }
    

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img src={book.cover_image} width='300' alt={`Cover of ${book.title}.`} className='pt-2 pb-2 mr-auto ml-auto shadow' style={{ display: 'block' }} />
                </Col>
                <Col lg={true}>
                    <h2 className="header text-center pt-5">{book.title}</h2>
                    <h3 className="font-italic text-center">AUTHOR: {book.author}</h3>
                    {/* <h3 className="font-italic text-center">{book.genres[0].name}</h3> */}
                    <p>{book.description}</p>
                    <h2 className='header text-center bg-primary text-white'>Reviews</h2>
                    <ul>
                        {reviewsLi}
                    </ul>
                    <CreateReviews setReviews = {setReviews}/>

                    <Button variant="warning" className='shadow m-3' onClick={deleteBook}>Delete Book</Button>
                </Col>
            </Row>
        </Container>
    );

}

export default Book;