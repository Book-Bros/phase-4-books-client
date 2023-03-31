import { Card,} from 'react-bootstrap';
import {Link} from 'react-router-dom';



function BookItem({id,author, title, cover_image}) {
    return (
        <>
        <Card style={{ width: '15rem' }} className='text-center p-3 m-2 mx-auto shadow'>
            <Link to={`/books/${id}`}>
                <Card.Img variant='top' src={cover_image} alt={`Cover of ${title}`} />
            </Link>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>by {author}</Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default BookItem;
