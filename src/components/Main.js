// src/components/Main.js
import React, { useReducer, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { fetchAPI, submitAPI } from "../services/api";
import { initializeTimes, updateTimes } from "../services/bookingApi";

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [bookingData, setBookingData] = useState(null);

  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      setBookingData(formData);
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route
          path="/confirmed"
          element={<ConfirmedBooking bookingData={bookingData} />}
        />
      </Routes>
    </main>
  );
};

export default Main;
