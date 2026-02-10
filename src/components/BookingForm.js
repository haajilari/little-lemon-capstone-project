import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [isLoading, setIsLoading] = useState(false); // 1. Visibility of System Status

  // 2. Error prevention: Calculate today's date for 'min' attribute
  const today = new Date().toISOString().split("T")[0];

  const isDateValid = date !== "";
  const isTimeValid = time !== "";
  const isGuestsValid = guests >= 1 && guests <= 10;
  const isOccasionValid = occasion !== "";

  const isValid =
    isDateValid && isTimeValid && isGuestsValid && isOccasionValid;

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };

  const handleClear = () => {
    // 3. User control and freedom: Allow user to reset form
    setDate("");
    setTime("");
    setGuests(1);
    setOccasion("Birthday");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setIsLoading(true);
      setTimeout(() => {
        const formData = { date, time, guests, occasion };
        submitForm(formData);
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "400px", gap: "20px" }} // Widened for better layout
      aria-label="Booking Form"
    >
      {/* Date Field */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          min={today} // Prevent past dates
          onChange={handleDateChange}
          required
          aria-required="true"
          className={!isDateValid && date !== "" ? "input-error" : ""}
        />
        {!isDateValid && date !== "" && (
          <span style={{ color: "red", fontSize: "12px" }}>
            Please select a valid date.
          </span>
        )}
      </div>

      {/* Time Field */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-required="true"
        >
          <option value="" disabled>
            Select a time
          </option>
          {availableTimes?.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
      </div>

      {/* Guests Field */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
          aria-required="true"
        />
        <span style={{ fontSize: "12px", color: "#666" }}>
          Minimum 1, maximum 10 guests.
        </span>
      </div>

      {/* Occasion Field */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Date Night</option>
        </select>
      </div>

      {/* Buttons Container */}
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <input
          type="submit"
          value={isLoading ? "Processing..." : "Make Your reservation"}
          disabled={!isValid || isLoading}
          aria-label="Make Your reservation"
          style={{
            flex: 1,
            cursor: isValid ? "pointer" : "not-allowed",
            opacity: isValid ? 1 : 0.6,
          }}
        />

        <button
          type="button"
          onClick={handleClear}
          style={{
            padding: "10px",
            backgroundColor: "#f4ce14",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          aria-label="Reset Form"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
