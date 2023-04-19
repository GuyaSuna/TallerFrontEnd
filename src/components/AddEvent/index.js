import React, { useState } from "react";
import { addEvent, getAllEvents } from "../../api";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
const AddEvent = () => {
  const navigation = useNavigate();

  const [event, setEvents] = useState({
    id: null,
    placeId: null,
    userId: null,
    name: null,
    description: null,
    date: null,
    images: null,
    updatedAt: null,
    createdAt: null,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const element = e.target.id;
    setEvents({ ...event, [element]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.confirm("Desea agregar un nuevo evento?")) {
      await addEvent(event);
    }
  };

  return (
    <>
      <h2>Agregar Evento</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="t">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            value={event.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Descripcion"
            // value={product.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label></Form.Label>
          <Form.Control
            type="date"
            placeholder="Fecha"
            // value={product.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="rating">
          <Form.Label></Form.Label>
          <Form.Control
            type="number"
            placeholder="Rating"
            // value={product.rating}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Agregar
        </Button>
      </Form>
    </>
  );
};

export default AddEvent;
