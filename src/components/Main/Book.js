import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";


function Book() {
    const [book, setBook] = useState({})
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://127.0.0.1:3001/books/${id}`)
        .then(res => res.json()).then((data) => setBook(data))
    }, [id])

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img src={book.cover_image} width='300' alt={`Cover of ${book.title}.`} className='pt-2 pb-2 mr-auto ml-auto shadow' style={{ display: 'block' }} />
                </Col>
                <Col lg={true}>
                    <h2 className="header text-center pt-5">{book.title}</h2>
                    <h3 className="font-italic text-center">{book.author}</h3>
                    <p>{book.description}</p>

                    <Button variant="warning" className='shadow m-3'>Delete Book</Button>
                </Col>
            </Row>
        </Container>
    );

}

export default Book;