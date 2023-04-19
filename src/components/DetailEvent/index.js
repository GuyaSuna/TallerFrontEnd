import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Star from "../Star";
import { useParams, useLocation, Link } from "react-router-dom";

const DetailEvent = ({ handleComment, handleReview, isLoggedIn }) => {
  let { ide } = useParams();
  const { state } = useLocation();
  const { events } = state;

  const [commentText, setCommentText] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewStars, setReviewStars] = useState(0);

  const event = events.find((event) => event.id === parseInt(ide));
  console.log(event);

  const addComment = () => {
    const id = event.comments.length + 1;
    const newComment = {
      id: id,
      userId: isLoggedIn ? isLoggedIn.id : 0, // Replace with the id of the logged-in user
      username: isLoggedIn ? isLoggedIn.name : "Anonymous",
      text: commentText, // Replace with the name of the logged-in user
    };
    const updatedComments = [...event.comments, newComment];
    const updatedEvent = { ...event, comments: updatedComments };
    console.log("updatedEvent", updatedEvent);
    handleComment(event.id, updatedEvent);
    setCommentText("");
  };

  const addReview = () => {
    const id = event.reviews.length + 1;
    const newReview = {
      id: id,
      userId: isLoggedIn ? isLoggedIn.id : 0, // Replace with the id of the logged-in user
      username: isLoggedIn ? isLoggedIn.name : "Anonymous", // Replace with the name of the logged-in user
      comments: reviewText,
      rating: reviewStars,
    };
    const updatedReviews = [...event.reviews, newReview];
    console.log("updatedReviews", updatedReviews);
    const updatedEvent = { ...event, reviews: updatedReviews };
    handleReview(event.id, updatedEvent);
    setReviewText("");
    setReviewStars(0);
  };

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="m-5">
      <h2>Event Detail</h2>
      <Card>
        <Card.Img variant="top" src={event.image} width={300} height={300} />
        <Card.Body>
          <Card.ImgOverlay>
            <Card.Title>{event.name}</Card.Title>
            <Card.Text>{event.location}</Card.Text>
          </Card.ImgOverlay>
          <Card.Text>{event.description}</Card.Text>
          <Card.Text>{event.date}</Card.Text>
          <Card.Text>
            <Star value={event.rating} />
          </Card.Text>
        </Card.Body>
      </Card>

      <h3>Comments</h3>
      {event.comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {event.comments.map((comment, index) => (
            <li key={index}>
              {comment.text} -{" "}
              <Link to={`/profile/${comment.userId}`}>{comment.username}</Link>
            </li>
          ))}
        </ul>
      )}
      <h3>Reviews</h3>
      {event.reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {event.reviews.map((review, index) => (
            <li key={index}>
              {review.rating} stars - {review.username}
            </li>
          ))}
        </ul>
      )}
      {isLoggedIn && (
        <>
          <div>
            <h3>Add Comment</h3>
            <input
              type="text"
              value={commentText}
              onChange={(event) => setCommentText(event.target.value)}
            />
            <button className="btn btn-primary m-3" onClick={addComment}>
              Add Comment
            </button>
          </div>
          <div>
            <h3>Add Review</h3>
            <input
              type="text"
              value={reviewText}
              onChange={(event) => setReviewText(event.target.value)}
            />
            <input
              type="number"
              min="1"
              max="5"
              value={reviewStars}
              onChange={(event) => setReviewStars(parseInt(event.target.value))}
            />
            <button className="btn btn-primary m-3" onClick={addReview}>
              Add Review
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailEvent;
