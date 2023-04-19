import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPlace = () => {
  const navigation = useNavigate();

  const [place, setPlaces] = useState({
    userID: null,
    name: null,
    description: null,
    adress: null,
    latitude: null,
    longitude: null,
    images: null,
    location: null,
    waterType: null,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const element = e.target.id;
    setPlaces({ ...place, [element]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.confirm("Agregar un lugar nuevo?")) {
      await AddPlace(place);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre del lugar"
            value={place.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Descripcion"
            value={place.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="adress">
          <Form.Label></Form.Label>
          <Form.Control
            placeholder="adress"
            value={place.adress}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="latitud">
          <Form.Label></Form.Label>
          <Form.Control
            type="number"
            placeholder="Latitud"
            value={place.latitude}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="longitud">
          <Form.Label></Form.Label>
          <Form.Control
            type="number"
            placeholder="Longitud"
            value={place.longitude}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label></Form.Label>
          <Form.Control
            type="image"
            placeholder="Agregar Imagen"
            value={place.images}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="location">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Pais"
            value={place.location}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="waterType">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Tipo de agua"
            value={place.waterType}
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

export default AddPlace;
