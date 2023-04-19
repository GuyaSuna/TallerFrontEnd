import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Star = ({ value, onClick }) => {
  const filledStar = <FontAwesomeIcon icon={faStar} />;
  const emptyStar = <FontAwesomeIcon icon={faStar} style={{ opacity: 0.5 }} />;
  
  return (
    <span onClick={() => onClick(value)} style={{ cursor: "pointer" }}>
      {value <= Math.floor(value) ? filledStar : emptyStar}
      {value >= Math.ceil(value) ? emptyStar : filledStar}
      {value - Math.floor(value) >= 0.5 ? filledStar : emptyStar}
      {value <= Math.floor(value) + 1 ? emptyStar : filledStar}
      {value >= Math.ceil(value) + 1 ? filledStar : emptyStar}
    </span>
  );
};

export default Star;