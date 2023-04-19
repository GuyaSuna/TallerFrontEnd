import React from "react";
import Card from "react-bootstrap/Card";
import Star from "../Star";
import { useParams } from "react-router-dom";

const DetailPlace = ({ places }) => {
  let { id } = useParams();
  const place = places.find((place) => place.id === parseInt(id));

  return (
    <div className="m-5">
      <h2>Detalles del lugar</h2>
      <Card>
        <Card.Img variant="top" src={place.image} width={200} height={200} />
        <Card.Body>
          <Card.ImgOverlay>
            <Card.Title>{place.name}</Card.Title>
            <Card.Text>{place.location}</Card.Text>
          </Card.ImgOverlay>
          <Card.Text>{place.description}</Card.Text>
          <Card.Text>{place.date}</Card.Text>
          <Card.Text>
            <Star value={place.rating} />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetailPlace;
