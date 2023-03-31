import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


export default function CreateReviews({setBook}) {
    const {id} = useParams()

    const [review, setReview] = useState({title: "", content: ""});

    const handleOnSubmit = (e) => {
        e.preventDefault()
        fetch(`https://booksapi-73rd.onrender.com/books/${id}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            fetch(`https://booksapi-73rd.onrender.com/books/${id}`).then(res => res.json()).then(data => setBook(data))
        });
    }

    return (
        <Container className='w-50 p-5'>
            <h2 className='header text-center'>Create a New Review</h2>
            <Form onSubmit={handleOnSubmit} className='mx-auto'>
                <Form.Group className='mb-3' controlId="title">
                    <Form.Label>Review Title:</Form.Label>
                    <Form.Control type="text" name="title" value={review.title} onChange={(e) => setReview({...review, title: e.target.value})} required />
                </Form.Group>
                <Form.Group className='mb-3' controlId="content">
                    <Form.Label>Content:</Form.Label>
                    <Form.Control as='textarea' name="content" value={review.content} onChange={(e) => setReview({...review, content: e.target.value})} style={{ height: '100px' }} required />
                </Form.Group>
                <div className='d-grid gap-2 col-6 mx-auto'>
                    <Button variant='secondary' type='submit' className='m-auto shadow' >Submit</Button>
                </div>
            </Form>
        </Container>
    );
}