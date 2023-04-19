import Carousel from "react-bootstrap/Carousel";
import { usePlaces } from "../../hooks/usePlaces";

function CarouselComp() {
  const { places } = usePlaces();

  return (
    <Carousel>
      {places.map((place) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={place.images[0].url}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComp;
