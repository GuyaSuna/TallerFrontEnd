import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Register = ({ handleRegister }) => {
  const [user, setUser] = useState({
    id: 5,
    name: "",
    email: "",
    password: "",
  });
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(user);
    navigation("/places");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const element = e.target.id;
    setUser({ ...user, [element]: value });
  };

  return (
    <>
      <h2>Registrarse</h2>
      <div className="col-4 mx-auto m-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="name"
              value={user.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={user.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={user.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            className="mb-5 mt-3"
            size="sm"
            variant="success"
            type="submit"
          >
            Aceptar
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
