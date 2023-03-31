import React from "react";
import "./review.css";
import {Container, Card, Button} from 'react-bootstrap';


export default function BookReview({book}) {
  // const saved = () => {
  //   alert("This button should save your review");
  // };

  return (
    <Container>
      <h2 className='header text-center bg-primary text-white'>Reviews</h2>
      {book.reviews.map(review =>
        <Card key={review.id} className='border-dark p-2 mb-2 shadow'>
          <Card.Title>{review.title}</Card.Title>
          <Card.Text>{review.content}</Card.Text>
          <Button variant='secondary' className='m-auto shadow'>Delete</Button>
        </Card>
      )}
    </Container>

  );
}
