import React from "react";
import { Link } from "react-router-dom"; // Import Link

const ConfirmedBooking = ({ bookingData }) => {
  if (!bookingData) {
    const storedData = localStorage.getItem("bookings");
    if (storedData) {
      bookingData = JSON.parse(storedData);
    } else {
      return (
        <div className="confirmation-page" style={{ padding: "40px" }}>
          <h2>No booking found.</h2>
          <Link to="/booking" className="button-primary">
            Go to Reservation
          </Link>
        </div>
      );
    }
  }

  return (
    <div
      className="confirmation-page"
      style={{ textAlign: "center", padding: "40px 20px" }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h1 style={{ color: "#495E57" }}>Booking Confirmed!</h1>
        <h2 style={{ color: "#F4CE14" }}>Thank you for your reservation.</h2>
        <p>We look forward to welcoming you to Little Lemon.</p>

        <div
          className="booking-details"
          style={{
            marginTop: "30px",
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "16px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Your Reservation Details:</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ margin: "10px 0" }}>
              <strong>Date:</strong> {bookingData.date}
            </li>
            <li style={{ margin: "10px 0" }}>
              <strong>Time:</strong> {bookingData.time}
            </li>
            <li style={{ margin: "10px 0" }}>
              <strong>Number of Guests:</strong> {bookingData.guests}
            </li>
            <li style={{ margin: "10px 0" }}>
              <strong>Occasion:</strong> {bookingData.occasion}
            </li>
          </ul>
        </div>

        {/* Navigation back to home */}
        <div style={{ marginTop: "40px" }}>
          <Link
            to="/"
            className="button-primary"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
