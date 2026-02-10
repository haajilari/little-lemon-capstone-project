// src/components/BookingPage.js
import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <>
      <div className="booking-content" style={{ padding: "2rem 4rem" }}>
        <h1>Reserve a Table</h1>
        <p>Please fill in the form below to book your table at Little Lemon.</p>

        {console.log("Available Times in BookingPage:", availableTimes)}

        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
    </>
  );
};

export default BookingPage;
