import React from "react";
import "./review.css";
import {Card, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'


export default function BookReview({review, nowBookID, setReviews, reviews, idCurrentUser}) {
  let takeupdateReview = useNavigate()
    function deleteReview(){
      fetch(`http://localhost:3000/books/${nowBookID}/reviews/${review.id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        credentials: "include"
    }).then(() => {
       let filteredReviews = reviews.filter((eachReview) => eachReview.id !== review.id )
        setReviews(filteredReviews)
    })
    }
  return (
    <li>
        <Card className='border-dark p-2 mb-2 shadow'>
          <Card.Title>{review.title}</Card.Title>
          <Card.Text>{review.content}</Card.Text>
          <Button variant='secondary' hidden={idCurrentUser !== review.user_id} className='m-auto shadow' onClick={() => takeupdateReview(`/books/${nowBookID}/reviews/${review.id}/update`)}>Update</Button>
          <Button variant='secondary' hidden={idCurrentUser !== review.user_id} className='m-auto shadow' onClick={deleteReview}>Delete</Button>
        </Card>
    </li>

  );
}
