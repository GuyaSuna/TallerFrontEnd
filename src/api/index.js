import EditPlace from "../components/EditPlace";

const URL = "http://ec2-44-200-15-255.compute-1.amazonaws.com:4000";

const getAllPlaces = async () => {
  try {
    const response = await fetch(`${URL}/places`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("error on getAllPlaces", error);
  }
};

const getAllEvents = async () => {
  try {
    const response = await fetch(`${URL}/events`);
    return await response.json();
  } catch (error) {
    console.log("error on getAllEvents", error);
  }
};

const getEvent = async (id) => {
  try {
    console.log("Entro");
    const response = await fetch(`${URL}/events/${id}`);
    return response.json();
  } catch (error) {
    console.log("error on getEvent", error);
  }
};

const getPlace = async (id) => {
  try {
    const response = await fetch(`${URL}/places/${id}`);
    return response.json();
  } catch (error) {
    console.log("error on getPlace", error);
  }
};

const addEvent = async (event) => {
  try {
    const response = await fetch(`${URL}/events/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...event,
      }),
    });
    return await response.json();
  } catch (error) {
    console.log("error en addEvent", error);
  }
};

const addPlace = async (place) => {
  try {
    const response = await fetch(`${URL}/places/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...place,
      }),
    });
    return await response.json();
  } catch (error) {
    console.log("error en addEvent", error);
  }
};

const editEvent = async (id, event) => {
  try {
    const response = await fetch(`${URL}/events/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...event }),
    });
    return await response.json();
  } catch (error) {
    console.log("error en editEvent", error);
  }
};

const editPlace = async (id, place) => {
  try {
    const response = await fetch(`${URL}/places/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...place }),
    });
    return await response.json();
  } catch (error) {
    console.log("error en editPlace", error);
  }
};

const deletePlace = async (id) => {
  try {
    const response = await fetch(`${URL}/places/delete/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    console.log("error en deletePlace", error);
  }
};

const deleteEvent = async (id) => {
  try {
    const response = await fetch(`${URL}/events/delete/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    console.log("error en deleteEvent", error);
  }
};
export {
  getAllPlaces,
  getAllEvents,
  getEvent,
  getPlace,
  addEvent,
  addPlace,
  editEvent,
  editPlace,
  deleteEvent,
  deletePlace,
};
