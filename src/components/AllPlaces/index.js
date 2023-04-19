import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
import Search from "../Search/index";
import { getAllPlaces } from "../../api";

const PlacesApi = (places) => {
  const navigation = useNavigate();
  const [placesA, setPlaces] = useState([]);
  const [search, setSearch] = useState("");
  const [searchFiltered, setSearchFiltered] = useState(placesA);

  useEffect(() => {
    const fetchPlaces = async () => {
      const response = await getAllPlaces();
      console.log("response", response);
      setPlaces(response);
    };
    fetchPlaces().then(() => console.log("fetched places"));
  }, []);

  useEffect(() => {
    if (search === "") {
      setSearchFiltered(placesA);
    } else {
      const searchFiltered = placesA.filter((place) =>
        place.name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchFiltered(searchFiltered);
    }
  }, [placesA, search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = (event, id) => {
    event.preventDefault();
    navigation(`/details/${id}`);
  };

  return (
    <div className="m-5 ">
      <Search value={search} onChange={handleChange} />
      <Row xs={1} md={2} className="g-4">
        {searchFiltered.map((place) => (
          <Col key={place.id}>
            <Card onClick={(e) => handleClick(e, place.id)}>
              <Card.Img
                variant="top"
                src={place.images[0].url}
                width={300}
                height={200}
              />
              <Card.Body>
                <Link>
                  <Card.Title>{place.name}</Card.Title>
                </Link>
                <Card.Text>{place.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PlacesApi;
