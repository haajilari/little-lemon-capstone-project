import React from "react";

const ConfirmedBooking = ({ bookingData }) => {
  if (!bookingData) {
    return (
      <div className="confirmation-page">
        <h2>Loading...</h2>
        <p>Or no booking data found.</p>
      </div>
    );
  }

  return (
    <div
      className="confirmation-page"
      style={{ textAlign: "center", padding: "40px 20px" }}
    >
      <h1 style={{ color: "#495E57" }}>Booking Confirmed!</h1>
      <h2 style={{ color: "#F4CE14" }}>Thank you for your reservation.</h2>
      <p>We look forward to welcoming you to Little Lemon.</p>

      <div
        className="booking-details"
        style={{
          marginTop: "30px",
          border: "1px solid #ddd",
          padding: "20px",
          display: "inline-block",
        }}
      >
        <h3>Your Reservation Details:</h3>
        <p>
          <strong>Date:</strong> {bookingData.date}
        </p>
        <p>
          <strong>Time:</strong> {bookingData.time}
        </p>
        <p>
          <strong>Number of Guests:</strong> {bookingData.guests}
        </p>
        <p>
          <strong>Occasion:</strong> {bookingData.occasion}
        </p>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
