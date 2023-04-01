import React from "react";
import "./review.css";
import {Card, Button} from 'react-bootstrap';


export default function BookReview({review}) {
  // const [reviews, setReviews] = useState([])

  // useEffect(() => {
  //   setReviews(book.reviews)
  // }, [book])

  // console.log(book.reviews)
  return (
    <li>
        <Card className='border-dark p-2 mb-2 shadow'>
          <Card.Title>{review.title}</Card.Title>
          <Card.Text>{review.content}</Card.Text>
          <Button variant='secondary' className='m-auto shadow'>Delete</Button>
        </Card>
    </li>

  );
}
