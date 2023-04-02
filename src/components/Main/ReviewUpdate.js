import React, { useEffect, useState } from "react";
import {useParams, useNavigate} from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap';
import Navbar from "../navbar/Navbar";


function ReviewUpdate(){
    let {bookid} = useParams()
    let {reviewid} = useParams()
    let takebook = useNavigate()
    let [updateReview, setUpdateReview] = useState({
        title: "",
        content: "",
        book_id: ""
    })

    useEffect(() => {
        fetch(`http://localhost:3000/books/${bookid}/reviews/${reviewid}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            credentials: "include"
        }).then(resp => resp.json())
        .then(data => setUpdateReview({ title: data.title, content: data.content, book_id: data.book_id }))
    }, [bookid, reviewid])

    function updateCurrentReview(e){
        e.preventDefault()
        fetch(`http://localhost:3000/books/${bookid}/reviews/${reviewid}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify(updateReview)
        }).then(() => takebook(`/books/${bookid}`))
    }


    return(
        <div>
        <Navbar />

        <Container className='w-50 p-5'>
        <h2 className='header text-center'>Update Review</h2>
        <Form onSubmit={updateCurrentReview} className='mx-auto'>
            <Form.Group className='mb-3' controlId="title">
                <Form.Label>Review Title:</Form.Label>
                <Form.Control type="text" name="title" value={updateReview.title} onChange={(e) => setUpdateReview({...updateReview, title: e.target.value})} required />
            </Form.Group>
            <Form.Group className='mb-3' controlId="content">
                <Form.Label>Content:</Form.Label>
                <Form.Control as='textarea' minLength="20" name="content" value={updateReview.content} onChange={(e) => setUpdateReview({...updateReview, content: e.target.value})} style={{ height: '100px' }} required />
            </Form.Group>
            <div className='d-grid gap-2 col-6 mx-auto'>
            <Button variant='secondary' className='m-auto shadow' onClick={() => takebook(`/books/${bookid}`)}>Cancel</Button>
                <Button variant='secondary' type='submit' className='m-auto shadow' >Submit</Button>

            </div>
        </Form>
    </Container>
    </div>
    )
}

export default ReviewUpdate;