import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Footer/index";
import Header from "../Header/index";

const Layout = ({ children, isLoguedIn, logout }) => {
  return (
    <div className="App">
      <Header isLoguedIn={isLoguedIn} logout={logout} />
      <main>
        <Container>
          <Row>
            <Col lg={12}>{children}</Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
