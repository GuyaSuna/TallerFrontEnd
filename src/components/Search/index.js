import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Search = ({value, onChange}) => {
  return (
    <Container className="text-center d-flex">
      <Row className="mx-auto">
        <Col lg={12}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={value}
              onChange={onChange}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
