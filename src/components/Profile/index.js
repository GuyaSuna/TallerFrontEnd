import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../App.css";

const Profile = ({ events }) => {
  const [place, setPlace] = useState({
    name: "",
    image: "https://via.placeholder.com/300",
    description: "",
    location: "",
    rating: 0,
    reviews: [],
    events: [],
  });

  const [event, setEvent] = useState({
    placeId: 0,
    name: "",
    image: "https://via.placeholder.com/300",
    description: "",
    location: "",
    date: "2023-05-27",
    rating: 0,
    comments: [],
    reviews: [],
  });

  const placeIds = events.map((event) => event.id);

  const handleAddPlace = (e) => {
    e.preventDefault();
    console.log(event);
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    console.log(event);
  };

  const onAddPlace = (e) => {
    e.preventDefault();
    console.log(event);
    const value = e.target.value;
    const element = e.target.id;
    setPlace({ ...place, [element]: value });
  };

  const onAddEvent = (e) => {
    e.preventDefault();
    console.log(event);
    const value = e.target.value;
    const element = e.target.id;
    setEvent({ ...place, [element]: value });
  };

  return (
    <Container>
      <Row className="custom-row">
        <Col>
          <h1>Agregar un lugar</h1>
          <Form onSubmit={handleAddPlace}>
            <Form.Group controlId="name">
              <Form.Label>Nombre del lugar</Form.Label>
              <Form.Control
                type="text"
                value={place.name}
                onChange={onAddPlace}
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Imagen del lugar</Form.Label>
              <Form.Control type="file" onChange={onAddPlace} />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Descripcion del lugar</Form.Label>
              <Form.Control
                type="text"
                value={place.description}
                onChange={onAddPlace}
              />
            </Form.Group>
            <Form.Group controlId="location">
              <Form.Label>Locación</Form.Label>
              <Form.Control
                type="text"
                value={place.location}
                onChange={onAddPlace}
              />
            </Form.Group>
            <Button
              className="mb-5 mt-3"
              variant="success"
              type="submit"
              size="sm"
            >
              Agregar
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="custom-row">
        <Col>
          <h1>Agregar un evento</h1>
          <Form onSubmit={handleAddEvent}>
            <Form.Label>ID</Form.Label>
            <Form.Select aria-label="Event id">
              {placeIds.map((id) => (
                <option value={id}>{id}</option>
              ))}
            </Form.Select>
            <Form.Group controlId="name">
              <Form.Label>Nombre del evento</Form.Label>
              <Form.Control
                type="text"
                value={event.name}
                onChange={onAddEvent}
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Agregar imagen</Form.Label>
              <Form.Control type="file" onChange={onAddEvent} />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Descripción del evento</Form.Label>
              <Form.Control
                type="text"
                value={event.description}
                onChange={onAddEvent}
              />
            </Form.Group>
            <Form.Group controlId="location">
              <Form.Label>Direccion del evento</Form.Label>
              <Form.Control
                type="text"
                value={event.location}
                onChange={onAddEvent}
              />
            </Form.Group>
            <Form.Group controlId="">
              <Form.Label>Fecha del evento</Form.Label>
              <Form.Control
                type="date"
                value={event.date}
                onChange={onAddEvent}
              />
            </Form.Group>
            <Button
              className="mb-5 mt-3"
              variant="success"
              type="submit"
              size="sm"
            >
              Agregar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
