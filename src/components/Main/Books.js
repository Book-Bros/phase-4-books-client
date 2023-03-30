import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import BookReview from "./BookReview";
import Modal from "react-modal";


export default function Books() {
  const [showBookReview, setShowBookReview] = useState(false);

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
    </div>
  );
}
