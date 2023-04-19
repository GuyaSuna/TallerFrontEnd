import React from "react";
import { useParams } from "react-router-dom";

const EditPlace = () => {
  const { placeId } = useParams();
  const navigation = useNavigate();

  const [place, setPlaces] = useState({
    // se edita todo?
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
  console.log("place", place);

  useEffect(() => {
    const getData = async () => {
      const response = await getPlace(placeId);
      setPlaces(response);
    };
    getData()
      .then(console.log("getting places"))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id } = product;

    if (window.confirm(`Estas seguro de editar el producto ${id} ?`)) {
      // llamar al servicio que me actualiza los datos
      const edit = {
        title: product.title,
        description: product.description,
        price: product.price,
        rating: product.rating,

        userID: place.userID,
        name: place.name,
        description: place.description,
        adress: place.adress,
        latitude: place.latitude,
        longitude: place.longitude,
        images: place.images,
        location: place.location,
        waterType: place.waterType,
      };
      await editPlace(id, edit);
    }
    navigation("/");
  };

  const handleChange = (e) => {
    // setear los cambios en el estado local
    const value = e.target.value;
    const element = e.target.id;
    setPlaces({ ...place, [element]: value });
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

export default EditPlace;
