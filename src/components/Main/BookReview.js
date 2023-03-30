import React from "react";
import "./review.css";

export default function BookReview({ onClose }) {
  const saved = () => {
    alert("This button should save your review");
  };

  return (
    <div className="review-pop">
      <h1>BookReview</h1>
      <button id="close" onClick={onClose}> close </button>
      <p>
        shows the clicked book its description in full, reviews and a button to
        add a new review
      </p>
      <button onClick={saved}>save review</button>
    </div>

  );
}
