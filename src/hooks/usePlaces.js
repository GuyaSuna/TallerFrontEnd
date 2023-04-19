import { useState, useEffect } from "react";
import { getAllPlaces } from "../api/index";

export function usePlaces() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const obtenerLugares = async () => {
      const data = await getAllPlaces();
      console.log("data", data);
      setPlaces(data);
    };

    obtenerLugares();
  }, []);

  return { places };
}
export default usePlaces;
