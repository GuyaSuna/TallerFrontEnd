import "./App.css";
import { useState } from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Places from "./components/AllPlaces/index";
import Event from "./components/AllEvents/index";
import Login from "./components/Login";
import Register from "./components/Register/index";
import DetailEvent from "./components/DetailEvent/index";
import DetailPlace from "./components/DetailPlace/index";
import initialState from "./initialState";
import Profile from "./components/Profile/index";
import Home from "./components/Home/home";
import AddEvent from "./components/AddEvent/index";
import UserProfile from "./pages/userProfile";

const App = () => {
  const [state, setState] = useState(initialState);

  const handleLogin = (user) => {
    setState((prevState) => ({
      ...prevState,
      currentUser: user,
    }));
  };

  const handleRegister = (user) => {
    console.log("user", user);
    setState((prevState) => ({
      ...prevState,
      currentUser: user,
    }));
  };

  const handleLogout = () => {
    setState((prevState) => ({
      ...prevState,
      currentUser: null,
    }));
  };

  const handleComment = (eventId, comment) => {
    setState({ ...state, events: comment });
  };

  const handleReview = (eventId, review) => {
    setState({ ...state, reviews: review });
  };

  const getAllEvents = () => {
    const events = state.places.map((place) => place.events || []).flat();
    return events;
  };

  return (
    <>
      <BrowserRouter>
        <Layout isLoguedIn={state.currentUser} logout={handleLogout}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/places" element={<Places places={state.places} />} />
            <Route path="/events" element={<Event events={getAllEvents()} />} />
            <Route path="/addEvent" element={<AddEvent />} />
            <Route
              path="/login"
              element={<Login handleLogin={handleLogin} />}
            />
            <Route
              path="/register"
              element={<Register handleRegister={handleRegister} />}
            />
            {/* <Route
              path="/profile"
              element={<Profile events={getAllEvents()} />}
            /> */}
            <Route
              path="/details/:id"
              element={<DetailPlace places={state.places} />}
            />
            <Route
              path="/details/:id/event/:ide"
              element={
                <DetailEvent
                  event={state.places}
                  handleComment={handleComment}
                  handleReview={handleReview}
                  isLoggedIn={state.currentUser}
                />
              }
            />
            <Route path="/userProfile" element={<UserProfile />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
