import React, {useState} from 'react'
import StarRating from '../starRating';

const Review = ({onReview}) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onReview({ rating, review });
    setRating(0);
    setReview('');
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Rating:</label>
        <StarRating value={rating} onChange={handleRatingChange} />
        <label>Review:</label>
        <textarea value={review} onChange={(e) => setReview(e.target.value)}></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default Review