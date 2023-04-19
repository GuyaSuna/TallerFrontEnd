import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Search from "../Search/index";
import { getAllEvents } from "../../api";

const EventApi = () => {
  const navigation = useNavigate();
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [searchFiltered, setSearchFiltered] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getAllEvents();
      console.log("response", response.data);
      setEvents(response.data);
    };

    fetchEvents().then(() => console.log("fetched events"));
  }, []);

  useEffect(() => {
    if (search === "") {
      setSearchFiltered(events);
    } else {
      const searchFiltered = events.filter((event) =>
        event.name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchFiltered(searchFiltered);
    }
  }, [events, search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = (event, eventId, id) => {
    event.preventDefault();
    navigation(`/details/${eventId}/event/${id}`, {
      state: { events: events },
    });
  };

  return (
    <div className="m-5">
      <Search value={search} onChange={handleChange} />
      <Row xs={1} md={2} className="g-4">
        {searchFiltered.map((event) => (
          <Col key={event.id}>
            <Card onClick={(e) => handleClick(e, event.placeId, event.id)}>
              <Card.Img
                variant="top"
                src={event.images[0].url}
                width={300}
                height={200}
              />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EventApi;
