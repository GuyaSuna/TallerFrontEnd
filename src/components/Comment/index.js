import React, { useState } from "react";

const index = ({ onComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onComment(comment);
    setComment("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add a comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default index;
