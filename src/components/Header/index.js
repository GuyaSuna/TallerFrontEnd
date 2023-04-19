import React from "react";
import { Container, Navbar, Nav, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = ({ isLoguedIn, logout }) => {
  const navigation = useNavigate();
  const handleLogout = () => {
    logout();
    navigation("/");
  };

  return (
    <>
      <Navbar data-theme="aqua" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home">Kayak</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/events">Eventos</Nav.Link>
              <Nav.Link href="/places">Lugares</Nav.Link>
            </Nav>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/register">Register</Nav.Link>
              {!isLoguedIn && (
                <>
                  <Button
                    type="button"
                    class="btn btn-primary btn-sm mt-1"
                    href="/login"
                  >
                    Login
                  </Button>
                </>
              )}
              {isLoguedIn && (
                <>
                  <Nav.Link href="#!">{isLoguedIn.name}</Nav.Link>
                  <Nav.Link href="/userProfile">Profile</Nav.Link>
                  <Button className="outline-primary" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
