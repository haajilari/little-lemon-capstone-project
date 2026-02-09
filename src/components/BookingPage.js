import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  return (
    <>
      <div className="booking-content" style={{ padding: "2rem 4rem" }}>
        <h1>Reserve a Table</h1>
        <p>Please fill in the form below to book your table at Little Lemon.</p>
        <BookingForm />
      </div>
    </>
  );
};

export default BookingPage;
