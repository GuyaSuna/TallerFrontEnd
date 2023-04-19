import React, { useState, useEffect } from "react";
import { getEvent, editEvent } from "../../api";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditEvent = () => {
  const { eventID } = useParams();
  const navigation = useNavigate();

  const [event, setEvent] = useState({
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

  useEffect(() => {
    const getData = async () => {
      const response = await getEvent(eventID);
      console.log("product response", response);
      setEvent(response);
    };
    getData()
      .then(console.log("getting events"))
      .catch((err) => console.log(err));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id } = event;

    if (window.confirm(`Estas seguro de editar el evento? ${id} ?`)) {
      const edit = {
        placeId: event.placeId,
        userId: event.userId,
        name: event.name,
        description: event.description,
        date: event.date,
        images: event.images,
        updatedAt: event.updatedAt,
        createdAt: event.createdAt,
      };
      await editEvent(id, edit);
    }
    navigation("/"); // enviar al usuario al usuario hacia atras..
  };

  const handleChange = (e) => {
    // setear los cambios en el estado local
    const value = e.target.value;
    const element = e.target.id;
    setEvents({ ...event, [element]: value });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Titulo"
            value={product.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Descripcion"
            value={product.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label></Form.Label>
          <Form.Control
            type="number"
            placeholder="Precio"
            value={product.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="rating">
          <Form.Label></Form.Label>
          <Form.Control
            type="number"
            placeholder="Rating"
            value={product.rating}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default EditEvent;
