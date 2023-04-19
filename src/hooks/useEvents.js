import { useState, useEffect } from "react";
import { getAllEvents } from "../api/index";

export function useEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const obtenerEventos = async () => {
      const data = await getAllEvents();
      console.log("data", data);
      setEvents(data);
    };
    obtenerEventos();
  }, []);

  return { events };
}
